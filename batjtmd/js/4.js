// 全局的  代码在执行之前会有一个编译
// 变量提升了  
var a;
a=1;
if(false){
    var value=1;// 申明变量
}
// undefined
console.log(value);