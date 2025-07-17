import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import { GlobalProvider } from './context/GlobalProvider'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// main.jsx 是入口文件
// 页面级别组件由路由驱动
createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <Router>
      <App />
    </Router>
  </GlobalProvider>
)
