module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
      "/api/v1": {
        target: "https://157.245.82.193"
      }
    }
  }
};
