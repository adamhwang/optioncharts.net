const withTM = require("next-transpile-modules")([
  "react-financial-charts",
  "@react-financial-charts/annotations",
  "@react-financial-charts/axes",
  "@react-financial-charts/coordinates",
  "@react-financial-charts/core",
  "@react-financial-charts/indicators",
  "@react-financial-charts/interactive",
  "@react-financial-charts/scales",
  "@react-financial-charts/series",
  "@react-financial-charts/tooltip",
  "@react-financial-charts/utils",
  "react-option-charts",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
