
var path    = require('path');
var webpack = require('webpack');


module.exports = {
    "mode":"development",
    entry: path.resolve(__dirname,"src/index.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    }
};