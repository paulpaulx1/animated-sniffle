/* eslint-disable no-undef */
module.exports = function override(config, env) {
  // New config, e.g. config.plugins.push...
  config.plugins.push(
    new webpack.DefinePlugin({
      // <-- key to reducing React's size
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(), //dedupe similar code
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin() //Merge chunks
  );
  return config;
};
