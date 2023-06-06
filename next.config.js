/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://unsplash.com/s/photos/url"],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zn"],
  },
};

module.exports = nextConfig;
