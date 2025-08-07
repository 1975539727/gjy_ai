# 面试热题 跨域 

- 大前端  都是JS
    - React/Vue mvvm 
    - node.js 后端 
    - 移动端(ios/android)
    - 桌面端 exe  vscode 用ts 写出来的
    - 嵌入式 ,AI 

- 前后端联调
    - 前后端分离 跨域
    - 前端 5173 
       from origin
    - 后端 8080 
       server 
    - 同源 
       protocol://domain:port
       domain 不一样 不是同一个来源 
       http://localhost:5173  -> http://www.baidu.com/api/user 
       协议不同也不同源  严格? 为什么? 
       http://localhost:5173  -> https://localhost:5173/api/user
       cross domain(origin) 
       http://localhost:5173  -> http://localhost:8080/api/user
       origin = http(s) + domain + port
    - CORS policy 同源策略 
       跨域了,CORS 将会block 我的请求 

- 为什么要学习跨域
  - 前后端分离是日常开发的形式,端口或域名不一样 
  - CORS Policy 同源策略？
     浏览器端的机制 
     Cross-Origin Resource Sharing
  - 跨域请求请block掉了
     请求到达了服务器端吗
     请求到达了
     响应被浏览器抛弃了block 掉了响应 
     浏览器的CORS 策略 
  - 安全问题? 
     - 前端(千千万万的用户) 的安全,攻击
     - 跨源的,可能不一定被信任 
  - 怎么解决跨域?
     - 即拿到cross orgin 的资源,同时又不违反CORS 机制 
     fetch/xhr 被CORS 管着了
     Cookie/localStorage 被CORS 管着了
     - img  script link 可以跨域 
     - 不用被管着的fetch/xhr/axios,用srcipt 

- 使用script的跨域解决方案  JSONP
   - script src  发送一个请求
      - 必须是get 请求,
      - javascript  
      - 前段想要的是 JSON ,还要可以继续执行 
      - 前端埋一个函数
         - 后端返回一个JS函数的执行
         - 在执行时将数据传给函数 
      - 需要后端的配合 
    - 返回JSON 
   JSON 前端需要后端提供的数据格式 
   Padding 