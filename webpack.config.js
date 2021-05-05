const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
  },
  module:{
      
    rules:[
        {
            test: /\.css$/i,
            use: ["style-loader","css-loader"]
        },
        {
            test: /\.less$/i,
            use: [
              // compiles Less to CSS
              "style-loader",
              "css-loader",
              "less-loader",
            ],
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                    limit: 60000
                }
              },
              'image-webpack-loader'
            ],
          }
    ]
  },
  plugins:[
      new HtmlWebPackPlugin({
          template: path.resolve(__dirname,"src","index.html")
      })
  ]
};
