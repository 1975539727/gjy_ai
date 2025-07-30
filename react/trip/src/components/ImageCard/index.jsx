import { useEffect,useRef } from 'react'
import styles from './card.module.css'

const ImageCard =(props)=>{
    const {url,height} =props
    const imgRef = useRef(null)
    useEffect(()=>{
        const observer =new IntersectionObserver(([entry],obs)=>{
            if(entry.isIntersecting){
                const img =entry.target;
                const imgUrl = img.dataset.src;
                const oImg = new Image();
                
                oImg.onload =function(){
                    img.src=img.dataset.src; // 图片加载完后，将data-src的值赋值给src，实现图片的懒加载
                }
                oImg.src = imgUrl;
                // img.src=img.dataset.src || '';
                obs.unobserve(img)
            }
        })
        if(imgRef.current){
            observer.observe(imgRef.current)
        }
    },[])
    return (
        <div style={{height}} className={styles.card}>
            <img data-src={url} className={styles.img}  ref={imgRef}/>
        </div>
    )
}
export default ImageCard