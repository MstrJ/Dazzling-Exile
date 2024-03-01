import { AuthorizationData } from "@/types/token";
import setupExpiredAt from "./setupExpiredAt";

const getAccessToken = async (code: string, code_verifier: string) => {
  const res = await fetch(`${process.env.POE_API_URL}/oauth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": process.env.NEXT_PUBLIC_USER_AGENT!,
    },
    body: new URLSearchParams({
      client_id: process.env.POE_CLIENT_ID!,
      grant_type: "authorization_code",
      code: code,
      redirect_uri: process.env.REDIRECT_URI!,
      scope: process.env.SCOPES!,
      code_verifier: code_verifier,
    }).toString(),
  });

  const data: AuthorizationData = await res.json();
  console.log("token data status:", data);
  if (!res.ok) throw new Error("Failed to fetch data");
  data.expires_at = setupExpiredAt(data.expires_in);

  return data;
};

export default getAccessToken;
