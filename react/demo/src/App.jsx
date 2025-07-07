import { 
  useState,
  useEffect
 } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [num, setNumber] = useState(0)
  useEffect(() => {
    console.log('count组件渲染完了')
  }, [count])
 

  const handleClick = () => {
    setCount(count + 1)
   
  }
  return (
    <>
      <button onClick={handleClick}>点我</button>
      <div>{count}</div>
      {num}
     <button onClick={()=>{
      setNumber(num+1)
     }}>点我</button>
    </>
  )
}

export default App
