import { AuthorizationData } from "@/types/token";
import { NextRequest, NextResponse } from "next/server";
// export const GET = async (request: NextRequest, response: NextResponse) => {
//   // console.log("req headers: ", request.headers);

//   const code_verifier = process.env.CODE_VERIFIER;
//   const code = request.nextUrl.searchParams.get("code") || "";

//   if (!code || !code_verifier) return new Response("xd", { status: 200 });

//   const url = `${process.env.POE_API_URL}/oauth/token`;

//   const res = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       "User-Agent":
//         "OAuth dazzlingexile/1.0.0 (contact: jakubkruliczak@gmail.com) StrictMode",
//     },
//     body: new URLSearchParams({
//       client_id: process.env.POE_CLIENT_ID!,
//       grant_type: "authorization_code",
//       code: code,
//       redirect_uri: process.env.REDIRECT_URI!,
//       scope: process.env.SCOPES!,
//       code_verifier: code_verifier,
//     }).toString(),
//   });

//   if (!res.ok) {
//     const text = await res.text();
//     return new Response(
//       `
//       Failed to fetch data
//       Status: ${res.status} - ${res.statusText}
//       ${text}
//       `,
//       {
//         status: res.status,
//       }
//     );
//   }

//   const data: authorizationData = await res.json();

//   console.log("data: ", data);
//   return NextResponse.json(data);

//   // return NextResponse.redirect(new URL("/", request.url));
// };
export const GET = async (request: NextRequest, response: NextResponse) => {
  const code_verifier = process.env.CODE_VERIFIER;
  const code = request.nextUrl.searchParams.get("code") || "";

  if (!code || !code_verifier)
    return new Response("No code or code verifier", { status: 400 });

  const url = `${process.env.POE_API_URL}/oauth/token`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent":
        "OAuth dazzlingexile/1.0.0 (contact: jakubkruliczak@gmail.com) StrictMode",
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

  if (!data) return new Response("No access token", { status: 400 });

  console.log(data);

  const params = new URLSearchParams();
  params.append("access_token", data.access_token);
  params.append("expires_in", data.expires_in.toString());
  params.append("token_type", data.token_type);
  params.append("scope", data.scope);
  params.append("username", data.username);
  params.append("sub", data.sub);
  params.append("refresh_token", data.refresh_token);

  const l = `http://localhost:3000/api/auth/callback/poe?${params.toString()}`;

  return new Response("", {
    status: 302,
    headers: {
      Location: l,
    },
  });
};
