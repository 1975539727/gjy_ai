// 全局作用域
function fn(){
    let a=2; // 块级作用域  2015年
    if(true){//支持块级作用域 (高级语言的特性)   var 不支持快级作用域
          var  b=3;
    }
    console.log(b);
}
fn();
if(false){ // 块级作用域  2015年
    let  value=1;
}
// 全局找不到
//console.log(value);