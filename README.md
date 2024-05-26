## Webpack  
* 初始化專案，產生專案描述檔 package.json  
  `npm init -y`

* 安裝套件  
執行階段套件   
  `npm install 套件名 --save`    
開發階段套件  
  `npm install 套件名 --save-dev`  
安裝全域套件  
`npm install 套件名 -g`  
* 更新套件   
  `npm update 套件名`   
* 解除安裝套件  
  `npm uninstall 套件名`

* 安裝 webpack  
  `npm install webpack webpack-cli --save-dev`
* 建立 src, dist 資料夾，src 放原始檔案， dist 放打包後的檔案
* package.json 裡 "scripts" 裡加上 `"build": "webpack"`
* 建立 Webpack 設定檔 `webpack.config.js`，建制細節看這包檔案，裡面 `mode: development` 和 `mode: production` 的差別是 production 為壓縮編碼後的檔案。  
* 讓 webpack 支援載入 CSS 模組  
`npm install style-loader css-loader --save-dev`    
在 webpack.config.js 裡加入 module -> rules -> test css 設定
* 讓 webpack 支援載入 SCSS 模組   
`npm install sass-loader node-sass --save-dev`  
在 webpack.config.js 裡加入 module -> rules -> test scss 設定

## 安裝 Webpack dev server
* 安裝  
  `npm install webpack-dev-server --save-dev`   
* 在 webpack.config.js 加入 dev server 設定，在 output 後面加上   
  `devServer:{ contentBase: "./dist" // 實際輸出程式的資料夾} `  
* 在 package.json 的 scripte 裡加入   
  `"start": "webpack-dev-server --open"`  

之後只要 `npm run start ` 就會自動建置專案並自動打開瀏覽器，看到目前專案結果 

  
