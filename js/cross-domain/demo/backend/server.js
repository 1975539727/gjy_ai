// common.js 老牌的模块化方案
const http = require('http');
// js 异步 异步无阻塞
// node 天生性能好 相同用户访问数,使用的服务器数量少，更便宜
const server =http.createServer((req,res)=>{
   if(req.url === '/api/hello'&& req.method === 'GET'){
      console.log('////')
      res.writeHead(200,{
         'Content-Type':'application/javascript',
      });
      // JSON 需要后端
      const data ={
        code:0,
        msg:'我来啦'
      }
      // json with padding 
      res.end("callback("+JSON.stringify(data)+")")
    //   res.end(JSON.stringify({message:'Hello'}))
    res.end("console.log('Hello')")
   } else {
       res.writeHead(404);
       res.end('Not Found')
   }
})
// 服务员程序在8080 端口上运行 
server.listen(8080,()=>{
   console.log('Server is running on port 8080');
})