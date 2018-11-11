const path = require('path');
const webpack = require('webpack');

const appDirectory = path.resolve(__dirname, './');

const babelLoaderConfiguration = {
  test: /\.js$/,
  use: [{
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['react-native-web']
      ]
    }
  }]
};

// This is needed for webpack to import static images in JavaScript files.
const imageFontLoaderConfiguration = {
  test: /(\.gif|jpe?g|png|svg|ttf)$/,
  include: [
    path.resolve(appDirectory, 'src/assets'),
    path.resolve(appDirectory, 'node_modules/@expo/samples'),
    path.resolve(appDirectory, 'node_modules/@expo/vector-icons'),
    path.resolve(appDirectory, 'node_modules/react-native-vector-icons'),
    path.resolve(appDirectory, 'node_modules/react-navigation-stack'),
  ],
  use: [{
    loader: 'url-loader',
    options: {
      name: '[name].[ext]'
    }
  }]
};

const cssLoaderConfiguration = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

module.exports = (env, argv) => {
  const envMode = process.env.NODE_ENV || argv.mode;
  return {
    entry: [
      // load any web API polyfills
      // path.resolve(appDirectory, 'polyfills.web.js'),
      // your web-specific entry file
      path.resolve(appDirectory, 'src/index.web.js')
    ],

    // configures where the build ends up
    output: {
      filename: 'bundle.web.js',
      path: path.resolve(appDirectory, 'dist')
    },

    module: {
      rules: [
        babelLoaderConfiguration,
        imageFontLoaderConfiguration,
        cssLoaderConfiguration
      ]
    },

    resolve: {
      // This will only alias the exact import "react-native"
      alias: {
        '^react-native$': 'react-native-web',
      },
      // If you're working on a multi-platform React Native app, web-specific
      // module implementations should be written in files using the extension
      // `.web.js`.
      extensions: [ '.web.js', '.js', '.ios.js', '.android.js' ]
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),

      // needed because @expo-samples doesn't come with non 2x/3x png files
      new webpack.NormalModuleReplacementPlugin(/assets\/images\/(expo|slack)-icon\.png/, function(resource) {
        resource.request = resource.request.replace(/\.png/, '@2x.png');
      }),

      // needed because Systrace.js in that dir has require calls that confuse webpack
      new webpack.ContextReplacementPlugin(
        /react-native[/\\]Libraries[/\\]Performance/,
        path.resolve(__dirname, './node_modules/react-native'),
      ),

      new webpack.DefinePlugin({'__DEV__': envMode === 'development'}),

    ],

    devServer: {
      contentBase: './dist',
      hot: true
    }
  }
}
