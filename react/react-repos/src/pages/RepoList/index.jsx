import { 
  useParams ,
  useNavigate,
  Link,
}  from "react-router-dom"
import {
  useEffect
} from 'react'
import {
useRepos,
} from '@/hooks/useRepos' 
const RepoList=()=>{
  const {id} = useParams();
  console.log(useParams());
  const navigate=useNavigate();
  // hooks 
  const {repos,loading,error}=useRepos(id);
  console.log(repos,loading,error);
  useEffect(()=>{
    if(!id.trim()){
      navigate('/') 
    }
  },[])
  
  // useEffect(()=>{
  //   //
    
  //   console.log(useParams());
  // },[])
  if(loading){
    return <div>loading...</div>;
  }
  if(error){
    return <div>{error}...</div>;
  }
  return (
    <>
      <h2>Reposi for {id}</h2>
      {
        repos.map((repo)=>
        (
          <Link key={repo.id} to={`/users/${id}/repos/${repo.name}`}>
            {repo.name}
          </Link>
        )
        )
      }
    </>
  )
}

export default RepoList