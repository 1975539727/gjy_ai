// 读取1.html 里面的内容
// 读取完后 打印 读完了
const fs = require('fs');// 引入js 内置的文件模块
const readFilePromise = new Promise((resolve) => {
    fs.readFile('./1.html', function (err, data) { // 读取文件  路径  编码  回调函数
        console.log(data.toString()); // 打印
        console.log('读完了'); // 打印
        resolve();
    })
})


readFilePromise
.then(() => 
    {
    console.log('1111');
})

