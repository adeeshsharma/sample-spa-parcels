const path = require('path');

module.exports = {
  entry: './src/Parcel.js', // Point to the Parcel.js file directly
  output: {
    filename: 'post-bundle.js', // Name of the output file
    path: path.resolve(__dirname, 'dist'), // Directory to output the bundle
    library: 'postsParcel', // Name of the library when consumed
    libraryTarget: 'umd', // Export as UMD module
    globalObject: 'this', // This is necessary to make UMD work in both browser and Node.js environments
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel loader for JS files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  mode: 'development', // Set development mode
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve from the dist directory
    },
    compress: true,
    port: 8082, // Port for Webpack dev server
    open: true, // Automatically open the browser
    headers: {
      'Access-Control-Allow-Origin': "*",
    }
  },
};
