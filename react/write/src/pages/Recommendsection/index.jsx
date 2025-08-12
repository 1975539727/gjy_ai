import {
    useImageStore
} from "@/store/image"
import {
   useEffect
} from  'react'
import Waterfall from "@/components/WaterFall";
import useTitle from '@/hooks/useTitle'
useTitle('推荐')
const Recommendsection=()=>{
    const {images,loading,fetchMore}=useImageStore();
    useEffect(()=>{
       fetchMore()
    },[])
    return(
        <>
           <Waterfall images={images}  fetchMore={fetchMore}  loading={loading}/>
        </>
        
    )
}
export default Recommendsection;