// Object.defineProperty 
var obj= {};// 对象
// es5 就提供的api
// react 和  vue 最新版 对浏览器有要求 
Object.defineProperty(obj, 'num', {
      value:1,
      // 属性描述
      configurable:true, // 默认为true
      writable:false ,
      enumerable:true,  // 可枚举 
//    get: function (){
//     console.log('读取了属性')
//     return 1 
//    }
})
// obj.num=2;
// console.log(obj.num)
// delete obj.num; 
// console.log(obj.num)
for(let key in obj){
    console.log(key+':'+obj[key]);
}

console.log(Object.getOwnPropertyDescriptor(obj,'num'));
Object.defineProperty(obj,'name',{
    writable:true,
})
obj.name ='Bob'
console.log(obj.name)
console.log(Object.getOwnPropertyDescriptor(obj,'name'));

for(let key in obj){
    console.log(key,obj[key]);
}