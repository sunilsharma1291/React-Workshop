module.exports = {
  entry: "./index.jsx",
  output: {
    path: './build',
    publicPath: "/static/",
    filename: "bundle.js"
  },

// just to handle the reload and browser back and forward buttons
  devServer: {
     port: 3000,
     historyApiFallback: true
   }
   ,

  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: "babel",
      include: __dirname,
      query: {
        presets: [ "react", "es2015", "react-hmre" ]
      }
    },
    	{
    		test:/\.css$/,
    		loader: ['style', 'css']
    	}
    ]
  }
}
