const path = require('path'); // node module중에 path모듈 가져옴
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 플러그인 형태라서 생성자함수를 가져와야함
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.resolve('./dist'), // 절대경로 전달해줌
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.png$/,
        use: {
          loader:'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
          // options: {
          //   publicPath: '../dist'
          // }
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}