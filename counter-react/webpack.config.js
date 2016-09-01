module.exports = {
  entry: "./index.js",
  output: {
    path: './build',
    publicPath: "/static/",
    filename: "bundle.js"
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      include: __dirname,
      query: {
        presets: [ "es2015", "react", "react-hmre" ]
      }
    }]
  }
}
