// main.jsx
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

// ✅ 引入 react-vant 样式（必须）
import 'react-vant/lib/index.css'

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)