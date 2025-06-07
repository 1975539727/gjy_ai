// 列表的渲染
function Todos(props) {
    // 父组件传过来的数据呢？ 传参 
    console.log(props,'////');
    const todos = props.todos; 
    return(
        <ul>
           {
                // 当下这个位置 
                // 数据为王  界面是被驱动的
                // 数据驱动
                // 数据绑定 data binding 
                // 发生改变后 自动刷新界面
                todos.map(todo=>(
                    <li key={todo.id}>{todo.text}</li>
                ))
            }
        </ul>
    )
}
export default Todos;