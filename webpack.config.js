const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: `development`,
  entry: `./src/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devServer: {
    contentBase: `dist`,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}]
              ]
            }
          }
        ]
      }
    ]
  }
}
