module.exports = {
  entry: "./client/js/index.jsx",
  output: {
      path: "./client/js",
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'].map(function(preset) { return require.resolve('babel-preset-' + preset)}),
        }
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};