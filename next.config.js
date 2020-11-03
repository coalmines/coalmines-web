const cfg = {
  basePath: "/web",
};

if (process.env.NODE_ENV === "production") {
  cfg.assetPrefix = process.env.NODE_APP_PATH || "/web/";
}

module.exports = cfg;
