import {
    useEffect,
    useContext
} from 'react'
import {
    GlobalContext
} from '@/context/GlobalProvider'
import {
    getRepos
} from '@/api/repos'
// 将响应式业务逻辑
export const useRepos = (id) => {
    // const repos=[];
    // const loading=true;
    // const error=null;
    const {state,dispatch}=useContext(GlobalContext) 
    useEffect(()=>{
        console.log('-------');
        dispatch({
            type:'FETCH_START'
        });
        (async()=>{
           try{
             const res=await getRepos(id);
             console.log(res)
             dispatch({
                type:'FETCH_SUCCESS',
                payload:res.data
             })
           }
           catch(err){
                dispatch({
                    type:'FETCH_ERROR',
                    payload:err.message
                })
           }
        })()
    },[]);
    return state
} 