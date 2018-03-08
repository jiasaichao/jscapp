const rrr = require('./serverrender');
const fs = require("fs");
const path = require('path');
const lujing = process.cwd();
// console.log('路径：' + process.cwd());
let strHtml = rrr.render();
const ejs = require("ejs");

// fs.readFile(path.resolve(process.cwd(), '../../src/assets/template/index.ejs'), "utf-8", function (err, data) {
//     let text = ejs.render(data, { jslist: chunk.files });
//     fs.writeFile(path.resolve(process.cwd(), '../build/index.html'), text, function () { });
// })
let builddir = path.resolve(lujing, `./build/staticbuild`);
console.log('删除：' + builddir);
deleteFolder(builddir);
strHtml.forEach((item) => {
    let curPath = path.resolve(lujing, `./build/staticbuild/${item.name}.html`);
    createFolder(curPath);
    let indextmp = fs.readFileSync(path.resolve(lujing, './config/static/template/index.ejs'), 'utf8');

    let text = ejs.render(indextmp, { root: { Content: item.content } });
    fs.writeFile(curPath, text, function (err) { });
});

//复制目录
exists(path.resolve(lujing, `./src/assets/static`), path.resolve(lujing, `./build/staticbuild`), copy);

function deleteFolder(path) {
    var files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolder(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

function createFolder(to) { //文件写入
    var sep = path.sep
    var folders = path.dirname(to).split(sep);
    var p = '';
    while (folders.length) {
        p += folders.shift() + sep;
        if (!fs.existsSync(p)) {
            fs.mkdirSync(p);
        }
    }
}

/*
 * 复制目录中的所有文件包括子目录
 * @param{ String } 需要复制的目录
 * @param{ String } 复制到指定的目录
 */
function copy(src, dst) {
    // 读取目录中的所有文件/目录
    fs.readdir(src, function (err, paths) {
        if (err) {
            throw err;
        }
        paths.forEach(function (path) {
            var _src = src + '/' + path,
                _dst = dst + '/' + path,
                readable, writable;
            fs.stat(_src, function (err, st) {
                if (err) {
                    throw err;
                }
                // 判断是否为文件
                if (st.isFile()) {
                    // 创建读取流
                    readable = fs.createReadStream(_src);
                    // 创建写入流
                    writable = fs.createWriteStream(_dst);
                    // 通过管道来传输流
                    readable.pipe(writable);
                }
                // 如果是目录则递归调用自身
                else if (st.isDirectory()) {
                    exists(_src, _dst, copy);
                }
            });
        });
    });
}

// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
function exists(src, dst, callback) {
    fs.exists(dst, function (exists) {
        // 已存在
        if (exists) {
            callback(src, dst);
        }
        // 不存在
        else {
            fs.mkdir(dst, function () {
                callback(src, dst);
            });
        }
    });
}

// 复制目录
// exists('./login', './haha', copy);