const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

const config = {
    devtool: 'cheap-eval-source-map',
    entry: './examples/basic/index.tsx',
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      path: __dirname + '/dist/eample-basic',
      filename: 'index_bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
      template: 'webpack/template.html'
    })]    
}

module.exports = config;