import {
    useEffect
} from 'react'
import {
    useParams
} from 'react-router-dom'
const UserProfile =  ()=>{
    const {id}=useParams();
    useEffect(()=>{
        // const id=
        console.log(window.location.pathname)
    },[])
    return (
        <>
        UserProfile{ id }
        </>
    )
}
export default UserProfile