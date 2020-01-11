module.exports = {
  publicPath: "./dist/",
  devServer: {
    proxy: {
      "/api/v1": {
        target: "http://157.245.82.193"
      }
    }
  }
};
