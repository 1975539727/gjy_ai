import styles from  './waterfall.module.css';
import {useRef,useEffect} from 'react';
import ImageCard from '../ImageCard';
const Waterfall =(props) =>{
    const loader=useRef(null);
    const {images,loading,fetchMore}=props
    useEffect(()=>{
        // ref 出现在视口范围内
        // 观察者模式
        const observer =new IntersectionObserver(([entry])=>{
            console.log(entry)
            if(entry.isIntersecting ){
                fetchMore();
            }
        })
        if (loader.current) observer.observe(loader.current)
    },[])
    return(
        <div className={styles.wrapper}>
          <div className={styles.column}>
            {
                images.filter((_,i)=>i%2===0).map(img=>(
                    <ImageCard key={img.id} {...img}/>
                ))
            }
          </div>
          <div className={styles.column}>
          {
                images.filter((_,i)=>i%2!=0).map(img=>(
                    <ImageCard key={img.id} {...img}/>
                ))
           }
          </div>
          <div ref={loader} className={styles.loader}>加载中</div>
        </div>
    )
}
export default Waterfall;