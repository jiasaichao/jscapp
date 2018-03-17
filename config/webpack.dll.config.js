const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        vendor1: [
            'react',
            'react-dom',
            'axios'
            // 'react-router-dom',
            // 'react-transition-group'
            //其他库
        ],
    },
    output: {
        path: path.resolve(__dirname, '../src/assets/static/js'),
        filename: '[name].js',
        library: '[name]_library'
    },
    plugins: [// js 压缩
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,    // 不美化输出
            compress: {
                warnings: false, // 不保留警告
                drop_debugger: true, // 不保留调试语句
                drop_console: true // 不保留控制台输出信息
            },
            mangle: {           // 跳过这些，不改变命名
                except: ['$super', '$', 'exports', 'require', '__dirname']
            },
            space_colon: false,
            comments: false     // 不保留注释
        }),
        new webpack.DllPlugin({
            path: path.resolve(__dirname, '../src/assets/template/vendor1.manifest.json'),
            name: '[name]_library',
        })
    ]
};
