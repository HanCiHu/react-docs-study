const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // src/index.tsx 파일을 진입점으로 설정
  entry: path.resolve(__dirname, 'src/index.tsx'),
  module: {
    rules: [
      {
        // .ts, .tsx 파일들을 ts-loader를 이용해 컴파일하여 번들링
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      }
    ]
  },
  devServer: {
    historyApiFallback: true // SPA를 위한 설정
  },
  plugins: [
    // index.html에 번들링된 스크립트 파일과 스타일이 자동으로 연결
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ]
};