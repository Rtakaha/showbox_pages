module.exports = {
  devServer: {
    port: 9050,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  publicPath: "/showbox_pages/",
  assetsDir: "",
  outputDir: "docs",
  "transpileDependencies": [
    "vuetify"
  ]
}
