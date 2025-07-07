import {
    useState // 私有状态 

} from 'react';
const TodoForm =(props) =>{
    // JSX 一定得有唯一的最外层元素  树来编译解析JSX 
    const {

    } = props;
  return(
    <>
        <h1 className='header'>TodoList</h1>
        <form>

        </form>
    </>
  )
}
export default TodoForm;