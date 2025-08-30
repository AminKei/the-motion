import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM();
