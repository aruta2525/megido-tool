const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ効でJSファイルが出力される
  mode: 'development',
  devtool: 'cheap-source-map',
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: {
    calcDamage: './src/ts/calcDamage.ts',
    hBomb: './src/ts/hBomb.ts'
  },
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [
          // スタイルシートをJSからlinkタグに展開する機能
          'style-loader',
          // CSSをバンドルするための機能
          'css-loader'
        ]
      }
    ]
  },
  // import 文で .ts ファイルを解決するため
  // これを定義しないと import 文で拡張子を書く必要が生まれる。
  // フロントエンドの開発では拡張子を省略することが多いので、
  // 記載したほうがトラブルに巻き込まれにくい。
  resolve: {
    // 拡張子を配列で指定
    extensions: ['.ts', '.js']
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin() // JavaScript の minify を行う
      // new OptimizeCSSAssetsPlugin() // CSS の minify を行う
    ]
  }
};
