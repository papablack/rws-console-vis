const path = require('path');

module.exports = {
  mode: 'production', 
  entry: './ink.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ink.bundle.js',
    libraryTarget: 'commonjs2' // This is important for a CommonJS output
  },
  resolve: {
    // alias: {
    //   react: path.resolve('./node_modules/react'),
    // },
    modules: [__dirname + '/node_modules'],
    fallback: {
      "bufferutil": false,
      "utf-8-validate": false
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  target: 'node', // Optimize the bundle for Node.js
};
