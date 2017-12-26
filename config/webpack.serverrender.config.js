const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const htmlPlugin = require('./htmlplugin');
module.exports = {
    entry: {
        index: [
            './config/serverrender.js'
            // 我们 app 的入口文件
        ]
    },
    output: {
        path: path.resolve(__dirname, './'),
        publicPath: '/',
        filename: 'serverrenderbuild.js'
    },
    plugins: [
        // new CopyWebpackPlugin([{
        //     from: path.join(__dirname, '../src/assets/static'),
        //     to: path.join(__dirname, '../build'),
        //     force: true,
        //     toType: 'dir',
        // }]),
        // new CleanWebpackPlugin(
        //     ['build'], //匹配删除的文件
        //     {
        //         root: path.resolve(__dirname, '../'),       //根目录
        //         verbose: true,        //开启在控制台输出信息
        //         dry: false        //启用删除文件
        //     }
        // ),
        // new htmlPlugin(function () { }, function () { }),
        // new webpack.DllReferencePlugin({
        //     context: '.',
        //     manifest: require("../src/assets/template/vendor1.manifest.json"),
        // })
    ],
    devtool: "source-map",
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
                include: [path.resolve(__dirname, '../src'),path.resolve(__dirname, './')],
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
                loader: "css-loader"
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
    // module: {
    //     loaders: [
    //         {
    //             test: /\.svg$/,
    //             loader: 'svg-sprite'
    //         },
    //         {
    //             test: /\.jsx?$/,
    //             exclude: /(node_modules|bower_components)/,
    //             loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
    //             query: {
    //                 presets: ['react', 'es2015', 'stage-0']
    //             }
    //         },
    //         // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
    //         { test: /\.tsx?$/, loader: "ts-loader" },
    //         {
    //             test: /\.js$/,
    //             exclude: /node_modules/,
    //             loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
    //             query: {
    //                 presets: ['react', 'es2015', 'stage-0']
    //             }
    //         }
    //     ],

    //     preLoaders: [
    //         // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    //         { test: /\.js$/, loader: "source-map-loader" }
    //     ]
    // },
    // When importing a module whose path matches one of the following, just assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our dependencies, which allows browsers to cache those libraries between builds.
    // 当导入的模块的路径与匹配下列内容之一，只是承担相应的全局变量存在并改用该。这是重要的因为它可以使我们避免捆绑所有我们依赖项，允许浏览器缓存这些库生成之间。
    // externals: {
    //     "react": "React",
    //     "./React": "React",
    //     "react-dom": "ReactDOM",
    //     "./ReactDOM": "ReactDOM"
    // }
};