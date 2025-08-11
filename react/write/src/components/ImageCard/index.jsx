import { useEffect, useRef, useState } from 'react'
import styles from './card.module.css'


const ImageCard = (props) => {
    const { url, height } = props;
    const imgRef = useRef(null);

    useEffect(() => {
        const img = imgRef.current;
        if (!img) return;

        const observer = new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting) {
                img.src = img.dataset.src; // 直接设置src
                img.onload = () => {
                    obs.unobserve(img); // 停止观察
                };
            }
        });

        observer.observe(img);

        return () => {
            observer.unobserve(img);
        };
    }, [url]);

    return (
        <div style={{
            height,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }} className={styles.card}>
                <img 
                data-src={url} 
                className={styles.img} 
                ref={imgRef} 
                alt="Lazy load" 
                style={{ marginBottom: '5rem' }} 
                />
        </div>
    );
};
export default ImageCard;