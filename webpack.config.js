const path = require('path')
const libraryName = "scrollToTarget"
module.exports = {
    entry: './src/scrollToTarget.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'scrollToTarget.js',
        library: 'scrollToTarget',
        libraryTarget: 'umd',
        umdNamedDefine: false
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components|test)/
            }
        ]
    }
}