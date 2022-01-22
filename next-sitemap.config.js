module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/404"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
