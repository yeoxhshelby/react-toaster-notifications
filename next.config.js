/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://unsplash.com/s/photos/url"],
  },
  i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ["en", "zn", "kr", "span", "jpn"],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path.
     */
    defaultLocale: "en",
  },
};

module.exports = nextConfig
