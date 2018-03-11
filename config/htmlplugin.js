const fs = require("fs");
const path = require('path');
const ejs = require("ejs");

class HtmlPlugin {
    constructor(doneCallback, failCallback) {
        this.doneCallback = doneCallback;
        this.failCallback = failCallback;
    }
    apply(compiler) {
        // 监听webpack生命周期里的事件，做相应的处理
        compiler.plugin('done', (stats) => {
            fileDisplay(path.resolve(__dirname, '../src'), (file) => {
                // console.log('路径：' + file)
                // fs.mkdir('../lineStage/new/aaffa2/', function (err) {
                //     if (err)
                //         console.error(err);
                //     console.log('文件名称' + file);
                //     // fs.writeFile('../lineStage/new/' + file, '文件已存在，则覆盖内容 -- ' + (new Date() - 0), function (err) {
                //     //     if (err) {
                //     //         console.log('错误' + err)
                //     //     } else {
                //     //         console.log(+'../lineStage/new/' + file + '已存在，内容被覆盖！');
                //     //     }
                //     // });
                // });
            });
            this.doneCallback(stats);
        });
        compiler.plugin('failed', (err) => {
            this.failCallback(err);
        });
        // emit（'编译器'对'生成最终资源'这个事件的监听）
        compiler.plugin("emit", function (compilation, callback) {
            // console.log("编译将要生成文件...");

            // compilation.chunks是块的集合（构建后将要输出的文件，即编译之后得到的结果）
            compilation.chunks.forEach(function (chunk) {
                // chunk.modules是模块的集合（构建时webpack梳理出的依赖，即import、require的module）
                // 形象一点说：chunk.modules是原材料，下面的chunk.files才是最终的成品
                // chunk.modules.forEach(function (module) {
                //     console.log('源文件：'+module)
                //     // module.fileDependencies就是具体的文件，最真实的资源【举例，在css中@import("reset.css")，这里的reset.css就是fileDependencie】
                //     // module.fileDependencies.forEach(function (filepath) {
                //     //     console.log('源文件：'+filepath)
                //     //     // 到这一步，就可以操作源文件了
                //     // });
                // });
                // 最终生成的文件的集合
                chunk.files.forEach(function (filename) {
                    // console.log('生成的文件'+filename)
                    // source()可以得到每个文件的源码
                    //var source = compilation.assets[filename].source();
                });
                fs.readFile(path.resolve(__dirname, '../src/assets/template/index.ejs'), "utf-8", function (err, data) {
                    let text = ejs.render(data, { jslist: chunk.files.filter((item) => item.substr(item.length - 2, 2)=='js') });
                    fs.writeFile(path.resolve(__dirname, '../build/index.html'), text, function () { });
                })

            });

            // callback在最后必须调用
            callback();
        });
    }
}
/** 
 * 文件遍历方法 
 * @param filePath 需要遍历的文件路径 
 */
function fileDisplay(filePath, fileCallback) {
    //根据文件路径读取文件，返回文件列表  
    fs.readdir(filePath, function (err, files) {
        if (err) {
            console.warn(err)
        } else {
            //遍历读取到的文件或文件夹列表  
            files.forEach(function (filename) {
                //获取当前文件的绝对路径  
                var filedir = path.join(filePath, filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象  
                fs.stat(filedir, function (eror, stats) {
                    if (eror) {
                        console.warn('获取文件stats失败');
                    } else {
                        var isFile = stats.isFile();//是文件  
                        var isDir = stats.isDirectory();//是文件夹  
                        if (isFile) {
                            fileCallback(filedir);
                            //console.log(filedir);
                        }
                        if (isDir) {
                            fileDisplay(filedir, fileCallback);//递归，如果是文件夹，就继续遍历该文件夹下面的文件  
                        }
                    }
                })
            });
        }
    });
}

/**
 * 创建所有目录
 * @param {*} dirpath 
 * @param {*} mode 
 * @param {*} callback 
 */
var mkdirs = function (dirpath, mode, callback) {
    path.exists(dirpath, function (exists) {
        if (exists) {
            callback(dirpath);
        } else {
            //尝试创建父目录，然后再创建当前目录
            mkdirs(path.dirname(dirpath), mode, function () {
                fs.mkdir(dirpath, mode, callback);
            });
        }
    });
};
module.exports = HtmlPlugin;