import { useEffect } from 'react'
import {
    useRepoStore
} from '../../store/repos'

const RepoList =()=>{
    const {
       repos,
       loading,
       error,
       fetchRepos
    } =useRepoStore()
    useEffect(()=>{
        fetchRepos()
    },[])
    return (
        <div>
            <h2>RepoList</h2>
            <ul>
                {
                    repos.map((repo)=>(
                        <li key={repo.id}>
                            <a 
                            href={repo.html_url } 
                            target="_blank"
                            rel="noreferrer"
                            >{repo.name}
                            </a>
                            <p>
                                {repo.description || 'no description'}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default RepoList;