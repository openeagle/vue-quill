module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  lintOnSave: false,
  configureWebpack:
    process.env.NODE_ENV === 'development'
      ? {}
      : {
          externals: {
            quill: {
              commonjs: 'quill',
              commonjs2: 'quill',
              amd: 'quill',
              root: 'Quill', // indicates global variable
            },
          },
          output: {
            library: 'VueQuill',
            libraryTarget: 'umd',
          },
        },
};
