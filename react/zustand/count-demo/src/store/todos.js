// todoList store
// 全局状态模块化
import {
    create // 创建一个store 存状态的地方
} from 'zustand'

export const useTodosStore = create((set) => ({
    todos:[
        {
            id:1,
            text:'打豆豆',
            completed:false,
        }
    ],
    addTodo:(todo) => set((state)=>{
        todos:[
            ...state.todos,
            {
                id:Date.now(),
                text,
                completed:false,
            }
        ]
    
    }),
    toggleTodo:(id) =>set((state)=>{
        todos:state.todos.map(todo => todo.id === id ? {...todo,completed:!todo.completed}:todo)
    }),
   deleteTodo:(id) => set((state)=>{
        todos:state.todos.filter(todo => todo.id !== id)
   })
}))
