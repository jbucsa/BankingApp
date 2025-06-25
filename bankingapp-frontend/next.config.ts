import type { NextConfig } from "next";

const path = require('path');

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  webpack: (config: { resolve: { alias: { [x: string]: any; }; }; }) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  }
};

export default nextConfig;
