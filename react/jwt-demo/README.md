# jwt 登录鉴权
- isLogin ,user 全局状态 zustand 
- mock 登录模拟
   - apifox  api 请求模拟
   不用写页面,就可以发送请求 
   curl 

- 会话授权 
   - 服务器知道我们是谁?
   - http 是无状态的 
     - 请求头 cookie 
     - server(服务器) 种下一个 cookie 唯一sid 值  sid => user 
     - 每次请求中 从cookie 读取sid 值
     - 服务器就知道是我们了
  
  - 登录和用户鉴权方案JWT  JSON Web Token
    - {id:112,username:'李四',level:4....} user JSON格式的数据
    - 一种算法  生成一个hash 串 
    - token 服务器令牌 
    - 带上token 
    - decode 解析 
        {id:112,username:'李四',level:4....}
- jsonwebtoken
  jwt 鉴权的库
  sign 颁发一个token user
  decode  secret 验证token user 
  - pnpm i jwt
  - import jwt from 'jsonwebtoken';
  - jwt.sign()
  - HTTP 请求头 Authorization   带上token
  - Cookie  每次自动带上 
  - token 需要手动设置的

- 加盐
  secret 
  传递token 前面会加上Bearer ${token}  持有者 
  通过http headers Authorization 

- 前段的用户权限状态 流程
  - zustand 
    登录 ,user useUserStore
  - 登录页面
     受控和非受控组件 
  - 路由守卫 
  - api/
    