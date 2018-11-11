const babelOptions = { presets: ['babel-preset-expo'] };

module.exports = require('babel-jest').createTransformer(babelOptions);
