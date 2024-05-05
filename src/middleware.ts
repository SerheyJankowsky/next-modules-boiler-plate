import { localePrefix, locales } from "@/modules/localization/navigations";
import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  defaultLocale: locales[0],
  localePrefix,
  locales,
});

export default function middleware(req: NextRequest) {
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(ua|en)/:path*"],
};
