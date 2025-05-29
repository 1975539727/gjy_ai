/**
 * 
 * @param {string} num1 
 * @param {string} num2 
 * @returns {string}
 */
function addLargeNumbers(num1, num2){
   let result='';//储存结果
   let carry=0;//储存进位
   let i=num1.length-1;//从num1的最后一位开始
   let j=num2.length-1;//从num2的最后一位开始
   while(i>=0||j>=0||carry>0){//只要有一个没有遍历完，或者有进位，就继续
    // 边界
    const digit1=i >= 0? parseInt(num1[i]):0;
    const digit2=j >= 0? parseInt(num2[j]):0;
    const sum=digit1+digit2+carry;
    result=(sum%10)+result;//将当前位的结果添加到result的前面
    carry=Math.floor(sum/10);//更新进位
    i--;//继续遍历
    j--;
   }
   return result;
}