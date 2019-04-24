var path = require('path'); 
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HandlebarsPlugin = require("handlebars-webpack-plugin");
module.exports = {
    entry : './src/index.js',
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'bound.js'
    },
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"]},
          { test: /\.handlebars$/, loader: "handlebars-loader" },
          { test: /\.css$/, use: ['style-loader', MiniCssExtractPlugin.loader,"css-loader",]},
          {test: /\.(png|svg|jpg|gif)$/,use:['file-loader']}
        ]
      },
    plugins: [
    new HtmlWebpackPlugin({hash:true,template:'./public/index.html',filename:"index.html"}),
    new MiniCssExtractPlugin({filename: "styles.css"}), 
    new CleanWebpackPlugin()]    
};


