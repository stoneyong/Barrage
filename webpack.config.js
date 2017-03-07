'use strict'
var path = require('path');
var webpack = require('webpack');
/*
 * clean publishing directory
 * （清空发布目录）
 * */
var CleanWebpackPlugin = require('clean-webpack-plugin');

/*
 * create html
 * （创建html文件）
 * */
var HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * extract css
 * （提取css文件）
 * */
var ExtractTextPlugin = require("extract-text-webpack-plugin");

/*
 *  merge config
 *  （合并config文件）
 * */
var Merge = require('webpack-merge');

/*
 * auto open browser
 * （自动打开浏览器）
 * */
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

/*
 * Webpack plugin that emits a json file with assets paths
 * (生出一个带有文件路径的json文件)
*/
var AssetsWebpackPlugin = require('assets-webpack-plugin');

var Autoprefixer = require('autoprefixer');
/*
 *  Detect how npm is run and branch based on that
 *  （当前 npm 运行）
 * */
var currentTarget = process.env.npm_lifecycle_event;

var debug,          // is debug
    devServer,      // is hrm mode
    minimize;       // is minimize


if (currentTarget == "build") { // online mode （线上模式）

  debug = false, devServer = false, minimize = true;

} else if (currentTarget == "dev") { // dev mode （开发模式）

  debug = true, devServer = false, minimize = false;

} else if (currentTarget == "hrm") { // dev HRM mode （热更新模式）

  debug = true, devServer = true, minimize = false;
}

/*
 * proxy target address
 * （代理访问地址）
 * */
var proxyTarget = 'http://localhost:8888/';

var PATHS = {
  /*
   * publish path
   * （发布目录）
   * */
  publicPath: devServer ? path.resolve('./Content') : '/',

  /*
   * node_modules path
   */
  node_modulesPath: path.resolve('./node_modules'),

  /*
   * public resource path
   * （公共资源目录）
   * */
  libsPath: path.resolve(process.cwd(), './Content/vendor')
}


var resolve = {
  /*
   * An array of extensions that should be used to resolve modules
   * （引用时可以忽略后缀）
   * */
  extensions: ['', '.js', '.css', '.scss', '.ejs', '.png', '.jpg'],

  /*
   * The directory (absolute path) that contains your modules
   * */
  root: [
      PATHS.node_modulesPath
  ],


  /*
   * Replace modules with other modules or paths.
   * （别名，引用时直接可以通过别名引用）
   * */
  alias: {
    // 'vue$': 'vue/dist/vue',
    'jquery': path.join(PATHS.libsPath, "jquery/jquery"),
    'doT': path.join(PATHS.libsPath, "doT/doT"),
    'jwPlayer': path.join(PATHS.libsPath, 'jwPlayer/jwPlayer')
  },

  /*
   * 
  */
  modulesDirectories: [
    '',
    'node_modules',
    'public'
  ]
}

/*
 * The entry point for the bundle.
 * （入口）
 * */
var entry = {
  //settings: './Content/modules/settings/main.js',
  player: './Content/modules/player/player.js',
  common: ['jquery', path.join(__dirname, './Content/global')],
};

/*
 * output options tell Webpack how to write the compiled files to disk
 * （webpack 编译后输出标识）
 * */
var output = {
  /*
   *  determines the location on disk the files are written to
   *  （输出目录）
   * */
  path: path.join(__dirname, 'dist'),

  /*
   * The publicPath specifies the public URL address of the output files when referenced in a browser
   * （发布后，资源的引用目录）
   * */
  publicPath: PATHS.publicPath,

  /*
   * Specifies the name of each output file on disk
   * （文件名称）
   * */
  filename: debug ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js',

  /*
   * The filename of non-entry chunks as relative path inside the output.path directory.
   * （按需加载模块时输出的文件名称）
   * */
  chunkFilename: debug ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js'
}

var loaders = [

    /*
     * vue loader
     */
    {
      test: /\.vue$/, loader: 'vue'
    },

    /*
     * babel-loader
     */
    {
      test: /\.js$/, loader: 'babel', 
      exclude: /node_modules/,
      query: {
        presets: ['es2015']
      }
    },

    /*
     * Exports HTML as string, require references to static resources.
     * （html loader）
     * */
    {
      test: /\.html$/, loader: "html"// loader: "html?-minimize"
    },


    /*
     * img loader
     * */
    {
      test: /\.(png|gif|jpe?g)$/,
      loader: 'url-loader',
      query: {
        /*
         *  limit=10000 ： 10kb
         *  图片大小小于10kb 采用内联的形式，否则输出图片
         * */
        limit: 10000,
        name: 'img/[name]-[hash:8].[ext]'
      }
    },

    /*
     * font loader
     * */
    {
      test: /\.(eot|woff|woff2|ttf|svg)\??.*$/,
      loader: 'url-loader',
      query: {
        limit: 5000,
        name: 'font/[name]-[hash:8].[ext]'
      }
    },
    /*
     * swf loader
    */
    { 
      test: /\.swf$/, 
      loader: "file?name=[path][name].[ext]"
    },
    /*
     * Extract css files
     * （提取css到单独文件loader）
     */
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader", {publicPath: '../'})
    },
    /*
     * less 编译
    */
    {
      test: '/\.less$/',
      loader: 'style!css?sourceMap!postcss!less?sourceMap'
    },
    {
      test: /\.tpl$/,
      loader: 'dot',
    }
];

let plugins = [

    /*
     * gloabal flag
     * （全局标识）
     * */
    new webpack.DefinePlugin({
      /*
       * dev flag
       * （开发标识）
       * */
      __DEV__: debug,

      /*
       * proxy flag
       * （代理的标识）
       * */
      __DEVAPI__: debug ? "/devApi/" : "''",


      /*
       * 去除vue的所有警告代码：http://vue-loader.vuejs.org/en/workflow/production.html
       * */
      'process.env': debug ? {
        NODE_ENV: '"production"'
      } : {}
    }),

    /*
     * common js
     * （公共js）
     * */
    new webpack.optimize.CommonsChunkPlugin(
        devServer ?
        { name: "common", filename: "js/common.js" } :
        { names: ["common", "webpackAssets"] }
    ),

    /*
     *  Module (value) is loaded when the identifier (key) is used as free variable in a module
     *  （如：使用jquery 可以直接使用符号 "$"）
     * */
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "_": "underscore"
    }),

    /*
     * Search for equal or similar files and deduplicate them in the output
     * （删除重复依赖的文件）
     */
    new webpack.optimize.DedupePlugin(),


    /*
     * Using this config the vendor chunk should not be changing its hash unless you change its code or dependencies
     * （避免在文件不改变的情况下hash值不变化）
     * */
    new webpack.optimize.OccurenceOrderPlugin(),


    /*
     * clean publishing directory
     * （发布前清空发布目录）
     * */
    new CleanWebpackPlugin(['dist'], {
      root: '', // An absolute path for the root  of webpack.config.js
      verbose: true,// Write logs to console.
      dry: false // Do not delete anything, good for testing.
    }),


    /*
     * extract css
     * （提取css文件到单独的文件中）
     * css/[name]-[chunkhash:8].css
     */
    new ExtractTextPlugin(debug ? "css/[name].css" : "css/[name]-[contenthash:8].css", { allChunks: true }),


    /*
     *create html file
     * （创建html文件）
     * */
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/Content/index.html',
      inject: 'true',

      // 需要依赖的模块
      chunks: ['common', 'settings', 'webpackAssets'],

      // 根据依赖自动排序
      chunksSortMode: 'dependency'
    }),

    new AssetsWebpackPlugin({
      filename: 'mainfest.json',
      path: path.join(__dirname, './dist')
    })
];


if (minimize) {
  
 plugins = plugins.concat([
      /*
       * Uglify
       * （压缩）
       * */
      new webpack.optimize.UglifyJsPlugin({ // js、css都会压缩
        mangle: {
          except: ['$super', '$', 'exports', 'require', 'module', '_', 'doT']
        },
        compress: {
          warnings: false,
          drop_console: true 
        },
        output: {
          comments: false,
        }
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 20000 })
  ])

}


var config = {
  entry: entry,
  /*
   *  Like resolve but for loaders.
   *  （查找loader 的位置）
   * */
  resolveLoader: { root: PATHS.node_modulesPath },
  output: output,
  module: {
    loaders: loaders
  },
  // vue: { // 将 vue 组件里的css提到单独文件中
  //   loaders: {
  //     css: ExtractTextPlugin.extract("css"),
  //     // you can also include <style lang="less"> or other langauges
  //     less: ExtractTextPlugin.extract("css!less")
  //   }
  // },
  resolve: resolve,
  plugins: plugins,
  postcss() {
    return [Autoprefixer({ browsers: ['> 0.6% in CN']})];
  },
  devtool: debug ? 'eval' : false,
}


/*
 *  Hrm setting
 * （开启热更新，并自动打开浏览器）
 * */
if (devServer) {

  config = Merge(
      config,
      {
        plugins: [
            // Enable multi-pass compilation for enhanced performance
            // in larger projects. Good default.
            new webpack.HotModuleReplacementPlugin({
              multiStep: true
            }),
            new OpenBrowserPlugin({ url: 'http://live.gulugulu.cn/i' + PATHS.publicPath + 'index.html' })
        ],
        devServer: {
          // Enable history API fallback so HTML5 History API based
          // routing works. This is a good default that will come
          // in handy in more complicated setups.
          historyApiFallback: true,

          // Unlike the cli flag, this doesn't set
          // HotModuleReplacementPlugin!
          hot: true,
          inline: true,

          // Display only errors to reduce the amount of output.
          stats: 'errors-only',

          // Parse host and port from env to allow customization.
          //
          // If you use Vagrant or Cloud9, set
          // host: options.host || '0.0.0.0';
          //
          // 0.0.0.0 is available to all network devices
          // unlike default `localhost`.
          host: "http://live.gulugulu.cn/i", // Defaults to `localhost`   process.env.HOST
          port: "80",  // Defaults to 8080   process.env.PORT
          /*
           *  代理访问
           *  1、可以绕过同源策略 和 webpack '热更新'结合使用
           */
          proxy: {
            '/devApi/*': {
              target: proxyTarget,
              secure: true,
              //rewrite 的方式扩展性更强，不限制服务的名称
              rewrite: function (req) {
                req.url = req.url.replace(/^\/devApi/, '');
              }
            }
          }
        }
      }
  );
}

module.exports = config;