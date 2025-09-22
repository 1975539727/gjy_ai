// 协商缓存,在返回文件的同时,响应头 
const http = require('http')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto') // 加密 hash计算 
// 单向加密  生成hash 
function md5 (data){
    return crypto.createHash('md5').update(data).digest('hex') // 16进制
} 

http.createServer(function (request,response){
    if(request.url === '/'){
        const html = fs.readFileSync('test.html','utf8');
        response.writeHead(200,{
            'content-type':'text/html'
        });
        response.end(html);
    }
    if(request.url === '/script.js'){
        // 浏览器缓存文件的hash 
        const noneMatch = request.headers['if-none-match'] // 客户端的hash值
        const filePath = path.join(__dirname,request.url) // 服务端的文件路径
        const buffer = fs.readFileSync(filePath) // 文件的二进制数据
        const fileMd5 = md5(buffer)  

        if(noneMatch === fileMd5){
            response.statusCode = 304; //  304 Not Modified  客户端缓存的文件没有变化 
            response.end()
            return ; 
        }
        response.writeHead(200,{
            'content-type':'text/javascript',
            'cache-control':'max-age=0',
            'etag':fileMd5,  
        })

        const readStream = fs.createReadStream(filePath) // 读取文件的流
        readStream.pipe(response)
    }
}).listen(1234)