import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req: any) => {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname }: { pathname: string } = req.nextUrl;
  let url = new URL(req.url);

  //TODO: if user logout when he is in stash page, he should be redirected to login page.
  if (
    !token &&
    (pathname.startsWith("/stash") || pathname.startsWith("/profile"))
  ) {
    //TODO: check if works in /profile/settings
    //TODO: redirect to login page.

    //here to no authorized user.
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (token) {
    if (pathname == "/") {
      url.pathname = "/stash";
      return NextResponse.rewrite(url);
    }
    if (pathname == "/profile") {
      url.pathname = "profile/stash";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
};

export const config = { matcher: ["/", "/stash", "/profile:path*"] };
