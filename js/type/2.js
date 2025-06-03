console.log(0/0);
// 平方根 NaN 
console.log(Math.sqrt(-1));// js内置的数学对象
console.log(parseInt("123"),parseInt("a123"),parseInt("123a"));
console.log(Number(undefined));// NaN

console.log(NaN===NaN);// false Not a Number
console.log(isNaN(NaN),isNaN(0/0),typeof 11 ==='number');// true
console.log(typeof NaN);