import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ru", "uz"];
const defaultLocale = "en";

export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const url = request.nextUrl.clone();

    // Check if the pathname is for static files, api routes, or next internal routes
    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api") ||
      pathname.startsWith("/static") ||
      pathname.includes(".") // Skip files with extensions (images, fonts, etc.)
    ) {
      return NextResponse.next();
    }

    // Redirect to default locale
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, images, etc)
    "/((?!_next/static|_next/image|_next/fonts|api|favicon.ico).*)",
  ],
};
