* 执行顺序
    * 执行serverrenderauto.js根据文件目录生成serverrender.js
    * 先用webpack转node可执行代码serverrender.js
    * 其次运行renderstatic.js