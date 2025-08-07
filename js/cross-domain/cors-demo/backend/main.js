const http= require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500'); // 允许所有域名访问
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH,OPTIONS'); // 允许的请求方法
    // if(req.url === '/api/test' && req.method === 'GET'){
    //     res.writeHead(200,{
    //         'content-type':'application/json',
    //         'Access-Control-Allow-Origin':'*'
    //     })
    //     res.end(JSON.stringify({
    //         msg:'跨域成功!!!'
    //     }))
    // }
    if(req.method === 'OPTIONS'){
        res.writeHead(200); // 同意
        res.end();
        return ;
    }
    if(req.url === '/api/test' && req.method === 'PATCH'){
        res.writeHead(200,{
            'content-type':'application/json',
            'Access-Control-Allow-Origin':'*'
        })
        res.end(JSON.stringify({
            msg:'跨域成功!!!'
        }))
    }
})

server.listen(8000,()=>{
    console.log("CORS server  running at http://localhost:8000");
})