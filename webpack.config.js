module.exports = {
  //エントリーポイント
  entry: "./src/index.js",

  //ファイルの出力設定
  output: {
    //出力先のパスを決定
    path: `${__dirname}/dist`,
    //出力ファイル名
    filename: "bundle.js",
  },
  //開発時はdevelopment,本番はproduction(読み込みが早くなる)
  mode: "development",

  //ローカルサーバーの設定
  devServer: {
    static: "dist",
    open: true,
  },
};