const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        components: [
            './src/components/index.js',
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
            path: path.resolve(__dirname, '../src/assets/template/[name].manifest.json'),
            name: '[name]_library',
        })
    ],
    resolve: {
        // 用于查找模块的目录
        extensions: [
            '.js', '.json', '.jsx'
        ]
        // 使用的扩展名
    },
    module: {
        // loaders: [] // 2.x 兼容
        rules: [    // rules 代替 loaders 
            // {
            //     enforce: 'pre',  // 前置执行
            //     test: /\.(js|jsx)$/,
            //     include: APP_PATH,
            //     loader: 'eslint-loader',
            //     options: {
            //         configFile: defPath.ESLINT_PATH   // 指定 eslint 的配置文件路径
            //     }
            // },
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, '../src'),
                loader: 'babel-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: path.resolve(__dirname, '../src/assets/svg'),
                // options: {
                //     runtimeCompat: true
                // }
            }, {
                test: /\.(png|jpg)$/,
                loader: "url-loader?limit=8192"
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
            // {
            //     test: /\.(js|jsx)$/,
            //     use: ["source-map-loader"],
            //     enforce: "pre"
            // }
            // {   // 向应用特定文件中注入变量，应用中可以直接使用 baseUrl
            //     test: require.resolve(defPath.REQUEST_PATH),
            //     loader: 'imports-loader?baseUrl=>' + JSON.stringify(API[process.env.NODE_ENV || 'development'])
            // }
        ]
    },
};
