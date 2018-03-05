const fs = require("fs");
const path = require('path');
const lujing = process.cwd();
// console.log('路径：' + process.cwd());
const ejs = require("ejs");


fs.readdir(path.join(process.cwd(), '../../src/static'), function (err, files) {
    console.log('文件', files.map((item)=>item.replace('.js', '')));
    fs.readFile(path.resolve(process.cwd(), 'template/serverrender.ejs'), "utf-8", function (err, data) {
        let text = ejs.render(data, { jslist: files.map((item)=>item.replace('.js', '')) });
        fs.writeFile(path.resolve(process.cwd(), 'serverrender.js'), text, function () { });
    })
    // files.forEach((item) => {

    // });
    // console.log(JSON.stringify(files))
})
// strHtml.forEach((item) => {
//     fs.writeFile(path.resolve(
//         lujing,
//         `./build/staticbuild/${item.name}.html`)
//         , item.content, function (err) {
//             console.log(err)
//         });
// });