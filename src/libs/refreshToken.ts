import { AuthorizationData } from "@/types/token";
import setupExpiredAt from "./setupExpiredAt";
import { JWT } from "next-auth/jwt";
let isRefreshing = false;
export default async function refreshToken(token: JWT): Promise<any> {
  if (isRefreshing)
    throw new Error("Refresh token operation is already in progress");
  isRefreshing = true;
  try {
    const res = await fetch(`${process.env.POE_API_URL}/oauth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": process.env.NEXT_PUBLIC_USER_AGENT!,
      },
      body: new URLSearchParams({
        client_id: process.env.POE_CLIENT_ID!,
        grant_type: "refresh_token",
        refresh_token: token.refresh_token,
      }).toString(),
    });
    const resToken: AuthorizationData = await res.json();
    if (!res.ok) {
      throw resToken;
    }

    return {
      ...token,
      access_token: resToken.access_token,
      expires_at: setupExpiredAt(resToken.expires_in),
      refresh_token: resToken.refresh_token ?? token.refresh_token,
    };
  } catch (e) {
    console.log(e);
    return {
      ...token,
      error: "RefreshAccessTokenError" as const,
    };
  } finally {
    isRefreshing = false;
  }
}
