/**
 * 
 * @returns {number}  total
 * @returns {number}  num
 * @returns {number[]}  
 * 
 */
function hongbao(total,num){
   const arr=[];
   let restAmount=total;//剩余金额
   let restNum=num;//剩余个数
   for(let i=0;i<num-1;i++){
       // Math 
       // 包装类
       let amount =Math.random(restAmount/restNum*2).toFixed(2);
       // console.log(amount);
       restAmount-=amount;
       restNum--;
       arr.push(amount);
   }
    //    - 公平性
    // 平均值
    // 随机性
     arr.push(restAmount.toFixed(2));
     return arr;
}
console.log(hongbao(100,20));