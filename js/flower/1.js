// 申明了对象常量
//  内存中开辟了一个空间，里面存放了一个对象
// hxt 取址 & 变量名是地址的标记
// js是弱类型语言 变量的类型由值决定 
// = 赋值 Object 
// 对象字面量(字面意义上) JSON 
// JS 太灵活，不需要new， 通过{}拿到对象 [] 拿到数组
const hxt = {
    name: '黄同学',
    age: 20,
    tall: 187,
    hometown: '山东',
    isSingle: true
};
// js 灵活
const pyc = {
  name: '彭同学', // key value  String
  age: 21, // Number  数值类型
  hometown: '江西',
  isSingle: true, // Boolean  布尔类型
  // 送花
  // 形参
  sendFlower: function(girl) {
    console.log(pyc.name + '给' + girl.name + '送了99朵玫瑰')
    girl.receiverFlower(pyc)
  }
}

const xm = {
    xq:30,
  name: '小美',
  room:'408',
  receiverFlower:function(sender) {
    console.log('收到了'+sender.name+'送的99朵玫瑰')
    if(xm.xq>90){
        console.log('硕果走一波')
    }else{
        console.log('gun ~~~');
    }
  }
}
//帮彭老板的 小美的闺蜜
const xh={
    xq:30,
    name:'小红',
    hometown:'江西',// 老乡
    room:'408',
    // 送小美，送小红 都具有receiverFlower 方法
    // 对象互换
    // 接口 interface  
    receiverFlower:function(sender) {
        // if(sender.name === '彭奕淳') {
        //     console.log('彭哥哥，让我们在一起吧');
        //     return;
        // }
        // setTimeout(() => { //定时器
        //    xm.xq=99;
        //    xm.receiverFlower(sender) 
        // }, 3000);
        xm.receiverFlower(sender) 
    }

}
pyc.sendFlower(xh)
