import {
    useEffect,
} from 'react';

function useTitle(title){
    useEffect(()=>{
        document.title = title;
        return ()=>{
            document.title = 'useTitle';
        }
    },[])
}
export default useTitle;