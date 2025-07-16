import {
    useState // 私有 
} from'react'
import {useTodoContext} from '../../hooks/useTodoContext'

const AddTodo =()=>{
    const [text,setText]=useState('');
    const { addTodo }=useTodoContext();// 跨层级
    const handleSubmit=(e)=>{
        e.preventDefault(); // 阻止表单默认行为
        // 全局管理 

        if(text.trim()){ // 去空格
            addTodo(text.trim()); // 调用addTodo方法添加任务
            setText(''); // 清空输入框
        }
        // localStorage.setItem(,);
        localStorage.setItem('text',text.trim()); // 存储到本地存储中
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={text}
            onChange={(e)=>{
                setText(e.target.value)
            }}
            />
            <button type="submit">Add</button>
        </form>
    )
}
export default AddTodo;