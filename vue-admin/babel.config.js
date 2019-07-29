// babel 配置

module.exports = {
  presets: [
    [
      "@web-pro/babel-preset-pro-vue",
    ]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    
    ]
};
