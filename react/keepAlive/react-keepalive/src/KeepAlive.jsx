{/* <KeepAlive>
  <Home />
</KeepAlive> */}
import {
    useEffect, 
    useRef
  } from 'react';
  import ReactDOM from 'react-dom';
  
  export default function KeepAlive({active, children}) {
    const containerRef = useRef(null); // 缓存容器dom
    const contentRef = useRef(null); 
  
    useEffect(() => {
      // 挂载
      if (!contentRef.current) {
        contentRef.current  = document.createElement('div');
        containerRef.current.appendChild(contentRef.current);
        ReactDOM.render(children, contentRef.current);
      }
      return () => {
        contentRef.current.style.display = 'none'
      }
    }, []);
  
    useEffect(() => {
      if (contentRef.current) {
        if (active) {
          contentRef.current.style.display = 'block';
        } else {
          contentRef.current.style.display = 'none';
        }
      }
    }, [active])
  
    return <div ref={containerRef}/>
  }