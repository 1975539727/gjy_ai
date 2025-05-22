//数组对象
const arr=['1','2','3'];
console.log(typeof arr);
const date=new Date();
console.log(typeof date);
// 如何区分Object的这些数据类型？
console.log( typeof Object.prototype.toString.call(arr));
console.log(Object.prototype.toString.call(date));
// 会在MDN文档中看一些资料
function getType(value){
    //string api 的选择
    // spilt + substring
    return Object.prototype.toString.call(value).substring(8,-1);
}
console.log(getType(arr));