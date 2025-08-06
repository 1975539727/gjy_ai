import { useState } from 'react'
import './App.css'
import{
  lazy,
  Suspense,
} from 'react'
import{
  Routes,// 路由设置容器
  Route,// 单条路由
  Navigate,// 路由跳转
} from 'react-router-dom'
const AIwrite = lazy(() => import('./pages/AIwrite'));
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
import Loading from './components/Loading';
import MainLayout from './components/MainLayout';
const Login = lazy(() => import('./pages/Login'));
import Recommendsection from "@/pages/Recommendsection";
import Categorylist from "@/pages/Categorylist";
import Hotlist from "@/pages/Hotlist";
function App() {

  return (
    <>
      <Suspense  fallback={<Loading />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/*' element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home />} >
              <Route path="recommend" element={<Recommendsection />} />
              <Route path="category" element={<Categorylist />} />
              <Route path="hot" element={<Hotlist />} />
            </Route>
            <Route path="/aiwrite" element={<AIwrite />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
