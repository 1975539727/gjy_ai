import {  useTodosStore } from "../../store/todos";
const TodoList =()=>{
    const {
      todos,
    } = useTodosStore()
    return (
        <div>
            <h1>To do list</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList;