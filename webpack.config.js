const path = require('path');
const port = 9001;

module.exports = {
    entry: {app: './src/index.js'},
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        open: true,
        compress: true,
        port: port
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader', options: {sourceMap: true}}
                ]
            },
            {test: /\.less$/, loader: 'less-loader', options: {sourceMap: true}},
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: false,
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }
        ]
    },
    mode: 'development',
    resolve: {
        alias: {
            jquery: 'jquery/src/jquery'
        }
    }
};
