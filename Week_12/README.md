学习笔记

1. 先创建文件夹 jsxx
2. 在jsxx执行 npm init
3. 再安装webpack webpack-cli
4. jsx是Babel的一个插件
5. 继续安装 npm i --save-dev webpack babel-loader
6. 配置 webpack.config.js文件中写
   module.export = {
       entry:"./main.js"  //入口文件
   }
7. 之后安装 npm i --save-dev @babel/core @babel/present-env
8. 继续配置 webpack.config.js文件 
    module.exports = {
    entry:"./main.js",
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:"babel-loader",
                    options: {
                        presets:["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    mode:"development"
}
9. 配置package.json安装 npm install --save-dev @babel/plugin-transform-react-jsx
10. 执行第九步，支持jsx
11. 继续在 webpack.config.js 配置
    module.exports = {
    entry:"./main.js",
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:"babel-loader",
                    options: {
                        presets:["@babel/preset-env"],
                        plugins:["@babel/plugin-transform-react-jsx"]
                    }
                }
            }
        ]
    },
    mode:"development"
}

12. ...children 表示把后面所有的不定个数的参数