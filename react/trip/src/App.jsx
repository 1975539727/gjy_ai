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
import { Flex, Loading } from 'react-vant';
const Home = lazy(() => import('@/pages/Home'));
const Search = lazy(() => import('@/pages/Search'));
// const Login = lazy(() => import('@/pages/Login'));
const Discount = lazy(() => import('@/pages/Discount'));
const Collection = lazy(() => import('@/pages/Collection'));
const Trip = lazy(() => import('@/pages/Trip'));
import './App.css'
import MainLayout from './components/MainLayout'
import BlackLayout from './components/BlackLayout'
import Account from './pages/Account';

function App() {
  return (
    <>
      <Suspense fallback={  
      <Flex justify="center" align="center">
          <Flex.Item >
             <Loading type="ball" />
          </Flex.Item>
      </Flex>}>
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
       
        {/* 空的Layout */}
        <Route element={<BlackLayout />}>
          <Route path='/search' element={<Search />} />
        </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
