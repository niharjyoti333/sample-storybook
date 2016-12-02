var path = require('path')
var webpack = require('webpack');
var environ = require('./env.config');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var JPlugins = {
  HMRE    : new webpack.HotModuleReplacementPlugin(),
  NOERR   : new webpack.NoErrorsPlugin(),
  EXTTEXT : new ExtractTextPlugin({filename:'styles.css',disable:false,allChunks:true})
};


/**
  Battle about Environment here.
**/
if(process.argv[2]){
  var env = process.argv[2].split('=')[1];
  if(env in environ.ENV){
    environ.ENV[env] = true;
  }else {
    console.error('=>>>>> ..... Specified ENV does not exist, falling back to default mode DEV!!!!!');
  }
}else{
  environ.ENV.DEV = true;
}

module.exports = {
  devtool:"cheap-module-source-map",
  entry: {
    webpack: 'webpack-hot-middleware/client',
    vendor : ['react','redux'],
    app:'./index'
  },
  output: {
    path:path.resolve(__dirname,'dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/',
    library: 'shared'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname,'/')],
        exclude: [path.resolve(__dirname,'/node_modules/')],
        use: [ 'babel-loader' ]
      },
      {
        test: /\.css?$/,
        exclude: [path.resolve(__dirname,'/node_modules/')],
        loader: ExtractTextPlugin.extract({loader:['css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]']}),
        include: __dirname
      }
    ]
  },
  plugins: environ.ENV['PROD'] ? [
    new webpack.optimize.OccurrenceOrderPlugin(),
    JPlugins.HMRE,
    JPlugins.NOERR,
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: true }
    }),
    JPlugins.EXTTEXT
  ] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    JPlugins.HMRE,
    JPlugins.NOERR,
    JPlugins.EXTTEXT,
    function() {
      this.plugin("done", function(stats) {
        require("fs").writeFileSync(
          path.join(__dirname, "", "stats.json"),
          JSON.stringify(stats.toJson()));
          //console.log(JSON.stringify(stats.toJson()));
      });
    }
  ]
}
