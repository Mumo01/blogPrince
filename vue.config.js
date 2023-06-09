module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    config.module.rules.delete("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/, 
          loader: 'vue-svg-loader', 
        },
      ],
    } ,     
  
}, 
lintOnSave: false
};
