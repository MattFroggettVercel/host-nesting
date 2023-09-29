import { rewrite } from "@vercel/edge";

export const config = {
  matcher: ["/"],
};

export function middleware(request: Request) {
  const url = new URL(request.url);

  return rewrite(new URL(`/${url.host}${url.pathname}`, request.url));
}
