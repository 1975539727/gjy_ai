import { useState } from 'react'
import './App.css'

function App() {
  console.log(import.meta.env.VITE_API_KEY)
  // react 内置的hook(钩子) 函数 快速的解决一些问题 响应式的数据状态
  // useRef DOM 等对象的绑定
  const [content,setContent] = useState('')
  const [imgBase64Data,setImgBase64Data]=useState('')
  const [isVaild,setIsVaild]=useState(false)
  // base64? google 推出的编码方案
  const updateBase64Data = (e) =>{
    // 拿到图片 e html5 js 和操作系统本地文件交互
    const file=e.target.files[0]
    // console.log(file)
    if(!file) return
    // html5 读的方式 读取文件
    const reader = new FileReader()
    reader.readAsDataURL(file)
    // 异步操作 
    reader.onload =()=>{
      // console.log(reader.result)
      setImgBase64Data(reader.result)
      setIsVaild(true)
    }
  }
  const update =() =>{
  }
  return (
    <div>
    <div className="contanier">
     <label htmlFor="fileInput">文件:</label>
     <input 
     type="file" 
     id="fileInput"
     className="input"
     accept=".jpeg,.jpg,.png,.gif"
     onChange={updateBase64Data}
     />
     <button onClick={update} disabled={!isVaild}>提交</button>
     <div className="preview">
          {
            imgBase64Data && <img src={imgBase64Data} alt=""/>
          }
     </div>
     <div>
      {content}
     </div>
    </div>
    </div>
  )
}

export default App
