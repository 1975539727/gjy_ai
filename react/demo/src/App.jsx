import { 
  useState,
  useEffect
 } from 'react'
import './App.css'
function App() {  
  const [theme,setTheme] = useState('light');
  const change= ()=>{
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <>
    <div className={`body ${theme}`}>
      {theme}
      <button onClick={change}>切换</button>
    </div>
    </>
  )
}

export default App
