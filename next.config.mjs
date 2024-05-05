import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntlPlugin("./src/modules/localization/i18n.ts");

const nextConfig = {};

export default withNextIntl(nextConfig);
