const rrr = require('./serverrender');
const fs = require("fs");
const path = require('path');
const lujing = process.cwd();
console.log('路径：' + process.cwd());
let strHtml = rrr.render();
const ejs = require("ejs");

// fs.readFile(path.resolve(process.cwd(), '../../src/assets/template/index.ejs'), "utf-8", function (err, data) {
//     let text = ejs.render(data, { jslist: chunk.files });
//     fs.writeFile(path.resolve(process.cwd(), '../build/index.html'), text, function () { });
// })
strHtml.forEach((item) => {
    fs.writeFile(path.resolve(
        lujing,
        `./build/staticbuild/${item.name}.html`)
        , item.content, function (err) {
            console.log(err)
        });
});