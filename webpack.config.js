const path = require('path');

module.exports = {
  mode: 'production', // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: './assets/js-src/app.js', // string | object | array  // defaults to './src'
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, 'assets/js'), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: 'bundle.js', // string    // the filename template for entry chunks
    publicPath: '/assets/js', // string    // the url to the output directory resolved relative to the HTML page
    libraryTarget: 'umd', // universal module definition    // the type of the exported library
    /* Advanced output configuration (click to show) */
  },
  module: {
    // configuration regarding modules
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    // directories where to look for modules
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  devtool: 'source-map', // enum  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.
  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory
  target: 'web', // enum  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules
  // lets you provide options for webpack-serve
  stats: 'errors-only',  // lets you precisely control what bundle information gets displayed

  plugins: [
    // ...
  ],
  // list of additional plugins
  /* Advanced configuration (click to show) */
};
