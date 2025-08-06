import { useState } from 'react'
import{
  lazy,
  Suspense,
} from 'react'
import {
  Routes,
  Route,
  Navigate
} from'react-router-dom'
const Home = lazy(() => import('@/pages/Home'));
const Search = lazy(() => import('@/pages/Search'));
// const Login = lazy(() => import('@/pages/Login'));
const Discount = lazy(() => import('@/pages/Discount'));
const Collection = lazy(() => import('@/pages/Collection'));
const Trip = lazy(() => import('@/pages/Trip'));
const Detail = lazy(() => import('@/pages/Detail'));
const Coze = lazy(() => import('@/pages/Coze'));
const Article = lazy(() => import('@/pages/Article'));
const ArticleNew = lazy(() => import('@/pages/Article/ArticleNew'));
import './App.css'
import MainLayout from './components/MainLayout'
import BlackLayout from './components/BlackLayout'
import Loading from '@/components/Loading';
import Account from './pages/Account';
import Toast from './components/Toast';
function App() {
  return (
    <>
      <Suspense fallback={ <Loading /> }>
        {/* 带有tabbar的Layout */}
        <Routes >
          <Route element={<MainLayout />}>
              <Route path='/' element={<Navigate to="/home" />} />
              <Route path='/home' element={<Home />} />
              <Route path='/discount' element={<Discount />} />
              <Route path='/account' element={<Account />} />
              <Route path='/collection' element={<Collection />} />
              <Route path='/trip' element={<Trip />} />
          </Route>
          <Route path="/coze" element={<Coze />}/>
        {/* 空的Layout */}
        <Route element={<BlackLayout />}>
          <Route path='/search' element={<Search />} />
          <Route path="/article" element={<Article />} >
            <Route path="new" element={<ArticleNew />} /> 
          </Route>
          <Route path='/detail/:id' element={<Detail />} />
        </Route>

        </Routes>
      </Suspense>
      <Toast />
    </>
  )
}

export default App
