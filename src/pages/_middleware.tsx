import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req: any) {
  // Token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWTSecret });
  const { pathname } = req.nextURL;
  //   Allow the requests if the following is true
  // 1) The token exists
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  //   Redirect them to login if they dont have a token AND are requesting a protected route
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}
