// module augmentation
import { JWT, DefaultJWT } from "next-auth/jwt";
import { AuthorizationData } from "./types/token";
import { Token } from "typescript";
declare module "next-auth" {
  interface Session {
    error?: "RefreshAccessTokenError" | "OtherIssue";
    user: {
      id: string;
      access_token: string;
      expires_in: number;
      token_type: string;
      scope: string;
      username: string;
      refresh_token: string;
    };
  }
  interface User {
    id: string;
    access_token: string;
    expires_in: number;
    token_type: string;
    scope: string;
    username: string;
    refresh_token: string;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    access_token: string;
    expires_at: number;
    expires_in: number;
    token_type: string;
    scope: string;
    username: string;
    refresh_token: string;
    error: "RefreshAccessTokenError" | "OtherIssue";
  }
}

declare module "next-auth" {
  interface TokenSetParameters {
    access_token: string;
    expires_in: number;
    token_type: string;
    scope: string;
    username: string;
    sub: string;
    refresh_token: string;
  }
}
