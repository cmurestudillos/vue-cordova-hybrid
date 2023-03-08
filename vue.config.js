module.exports = {
  outputDir: './www',
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
        .tap(options => {
          return options
        })
  }
}