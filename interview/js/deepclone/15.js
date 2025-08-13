const obj ={
    a:1,
    b:2
}
// 太常用,大型语言都内置的,[] {}
// HashMap 字典 0 
const target =new Map(); // 是实例化es6 新的数据结构
target.set('c',3)
console.log(target.get('c'))
target.set(obj,4) // 和JSON 不一样的地方 对象做key
console.log(target.get(obj)) 

