import { 
  useState,
  useEffect,
  Suspense,
  lazy
} from 'react'
import './App.css'
import {
  BrowserRouter as Router,  // history 路由
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom'
import { 
  getRepos,
  getRepoDetail,
} from './api/repos'// 上面是导入，所以要空一行  细节
import Loading from './components/Loading'
const RepoList=lazy(()=>import('./pages/RepoList'))
const RepoDetail=lazy(()=>import('./pages/RepoDetail'))
const Home=lazy(()=>import('./pages/Home'))
const NotFound=lazy(()=>import('./pages/NotFound'))
function App() {

  // useEffect(()=>{
  //   ( async ()=>{
  //     const res=await getRepos('1975539727');
  //     const repo=await getRepoDetail('1975539727','OpenManus')
  //     console.log(res,repo)
  //   })()
  // },[])
//  useEffect(()=>{
//     ( async ()=>{
//         const repos=await getRepos('1975539727');
//         const repo=await getRepoDetail('1975539727','OpenManus')
//         console.log(repos)
//       })()
  //  (async ()=>{
  //   const res=await getRepoReadme('1975539727','OpenManus')
  //   console.log(res)
  //  })()
//  },[])
  return (
    <Suspense fallback={<Loading />}>
     <Routes>
     <Route path="/"  element={<Home/> }/>
      <Route path="*"  element={<NotFound />} />
      <Route path="/users/:id/repos/:repoId"  element={<RepoDetail />} />
      <Route path="/users/:id/repos"  element={<RepoList />} />
     </Routes>
    </Suspense>
  )
}

export default App
