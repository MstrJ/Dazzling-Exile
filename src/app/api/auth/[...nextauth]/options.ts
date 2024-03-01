import { NextAuthOptions } from "next-auth";
import refreshToken from "@/src/libs/refreshToken";
import setupExpiredAt from "@/src/libs/setupExpiredAt";
import getAccessToken from "@/src/libs/getAccessToken";
import pkceSetup from "@/src/libs/pkceSetup";
const { code_verifier, code_challenge } = pkceSetup();

export const options: NextAuthOptions = {
  providers: [
    {
      id: "poe",
      name: "Poe",
      type: "oauth",
      clientId: process.env.POE_CLIENT_ID,
      checks: ["state"],
      issuer: process.env.POE_API_URL,
      authorization: {
        url: `${process.env.POE_API_URL}/oauth/authorize`,
        params: {
          response_type: "code",
          client_id: process.env.POE_CLIENT_ID,
          scope: process.env.SCOPES,
          redirect_uri: process.env.REDIRECT_URI,
          code_challenge: code_challenge,
          code_challenge_method: "S256",
        },
      },
      token: {
        async request({ params }): Promise<any> {
          const data = await getAccessToken(params.code!, code_verifier);
          return { tokens: data };
        },
      },
      userinfo: {
        async request(context): Promise<any> {
          const token = context.tokens;
          return { profile: token };
        },
      },

      profile({ profile }) {
        return {
          id: profile.sub,
          ...profile,
        };
      },
    },
  ],
  debug: process.env.NODE_ENV === "development",
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...user,
          accessToken: account.access_token,
          accessTokenExpires: setupExpiredAt(user.expires_in),
          refreshToken: account.refresh_token,
        };
      }

      if (Date.now() < token.expires_at * 1000) {
        return token;
      }
      return await refreshToken(token);
    },
    async session({ session, token }) {
      if (token.error) {
        session.error = token.error;
      } else {
        session.user.access_token = token.access_token;
        session.user.id = token.id;
        session.user.refresh_token = token.refresh_token;
        session.user.scope = token.scope;
        session.user.token_type = token.token_type;
        session.user.username = token.username;
        session.expires = new Date(1000 * token.expires_at).toLocaleString();
      }

      return session;
    },
  },
};
