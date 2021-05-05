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
        }
    ]
  },
  plugins:[
      new HtmlWebPackPlugin({
          template: path.resolve(__dirname,"src","index.html")
      })
  ]
};
