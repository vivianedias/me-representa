/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const { withAxiom } = require("next-axiom");

const nextConfig = withAxiom({
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
});

module.exports = nextConfig
