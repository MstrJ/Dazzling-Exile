export interface AuthorizationData {
  access_token: string;
  expires_in: number;
  expires_at: number;
  token_type: string;
  scope: string;
  username: string;
  sub: string;
  refresh_token: string;
}
