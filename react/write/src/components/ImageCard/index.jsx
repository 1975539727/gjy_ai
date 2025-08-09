import { useEffect, useRef, useState } from 'react'
import styles from './card.module.css'
import { Loading } from 'react-vant';

const ImageCard = (props) => {
    const { url, height } = props;
    const imgRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const img = imgRef.current;
        if (!img) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.src) return;
                
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        }, {
            threshold: 0.1
        });

        observer.observe(img);

        return () => observer.unobserve(img);
    }, [url]);

    return (
        <div style={{
            height,
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end', // 内容底部对齐
            backgroundColor: '#f5f5f5'
        }} className={styles.card}>
            <img 
                data-src={url} 
                ref={imgRef}
                onLoad={() => {
                    setIsLoading(false);
                    setHasError(false);
                }}
                onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                }}
                style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // 填充整个容器
                    objectPosition: 'center top', // 图片顶部对齐，底部会被裁剪
                    display: isLoading || hasError ? 'none' : 'block',
                    position: 'absolute'
                }}
                alt=""
            />
            
            {isLoading && <Loading style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />}
            
            {hasError && (
                <div style={{
                    color: '#999',
                    textAlign: 'center',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    图片加载失败
                </div>
            )}
            
            {/* 底部留白部分 */}
            <div style={{
                height: '10%', // 调整这个值来控制留白大小
                width: '100%',
                backgroundColor: 'white', // 或任何你想要的背景色
                position: 'relative',
                zIndex: 2
            }} />
        </div>
    );
};

export default ImageCard;