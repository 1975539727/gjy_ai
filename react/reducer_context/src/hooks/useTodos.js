import {
    useReducer
}  from 'react';
import todoReducer from '../reducers/todoReducer'
// es6参数的默认值
// {todos,} key:value  省略
// ` ` 模版字符串
// 解构 []=[] {}={} 
// 展开运算符, ... rest运算符   
const initialTodos =[
    {
        id:1,
        text:'学习React',
        done:false
    }
]
export function useTodos(initial=initialTodos) {
    const [todos,dispatch] = useReducer(todoReducer,initial)

    const addTodo = text => dispatch({type: 'ADD_TODO',text})
    const toggleTodo =(id)=> dispatch({type: 'TOGGLE_TODO',id})
    const removeTodo =(id)=> dispatch({type: 'REMOVE_TODO',id})

    return {
        todos,
        addTodo,
        toggleTodo,
        removeTodo
    }
}