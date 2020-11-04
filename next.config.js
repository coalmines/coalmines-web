const cfg = {};

if (process.env.NODE_ENV === "production") {
  cfg.assetPrefix = process.env.NODE_APP_PATH || "/web/";
  cfg.basePath = "/web";
}

module.exports = cfg;
