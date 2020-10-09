module.exports = {
  devServer: {
    port: 9050,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  publicPath: "./",
  assetsDir: "./",
  outputDir: "docs",
  "transpileDependencies": [
    "vuetify"
  ]
}
