const px2rem = require('postcss-px2rem');
const path = require('path');

module.exports = {
  lintOnSave: false,
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 37.5, // 基准大小 baseSize，需要和rem.js中单位rem值占比一样相同
          }),
        ],
      },
    },
  },

};
