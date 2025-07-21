# css 模块化
- Button AnotherButton 按钮组件
    自己写的组件
    别人写的组件
    第三方的组件
    冲突 
- 唯一的类名 
    取名  烦了 
    css 模块化的能力 
    不会外界影响
    不会影响外界
- style.module.css  模块化的css
    - react vite 
       确保唯一hash值  加到原类名上
    - vue scoped 
    -  可读性受影响不? 
       - 读的是源码 .button 
       - 被模块化保护了
       - npm run build
- dev/build/test/product
   开发的时候在dev 代码的可读性
   vite, react .jsx babel preset-react
   style.module.css 
   import style from './style.module.css'
   style js 对象 css 的每一个类名都可以面向对象访问绑定

   npm run build
   npm run test 测试一下 
   aliyun ngnix 跑起来 dist/