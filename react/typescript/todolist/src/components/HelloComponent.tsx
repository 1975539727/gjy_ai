import React from "react";
// 如何约束函数的返回值为ReactNode? JSX 
// FC == FunctionComponent 函数组件
// 如何来约定自己需要一个name 的prop?
interface Props {
   name:string;
}
// typeScript 类型约束,重要的地方一定要约束
// 参数和返回值
// 泛型 泛指内部的类型 
const HelloComponent:React.FC<Props> = (props:Props) => {
    // const {name} = props;
   return (
     <h2>Hello User:{props.name}</h2>
   ) 
}

export default HelloComponent ;