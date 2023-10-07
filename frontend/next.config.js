/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Add a rule for .geojson files
    config.module.rules.push({
      test: /\.geojson$/,
      use: "json-loader",
    });

    return config;
  },
};

module.exports = nextConfig;
