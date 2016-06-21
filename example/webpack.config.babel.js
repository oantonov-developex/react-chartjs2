import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: {
    app: './example.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: './example.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
};
