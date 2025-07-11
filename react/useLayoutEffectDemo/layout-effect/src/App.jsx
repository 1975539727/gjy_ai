import { 
  useState ,
  useEffect,
  useLayoutEffect,
  useRef
} from 'react'
import './App.css'

// function App() {
//   // 响应式对象 
//   const boxRef = useRef();
//   console.log(boxRef.current,boxRef)
//   useEffect(()=>{
//     console.log('useEffect height',boxRef.current.offsetHeight);
//   },[])

//   useLayoutEffect(()=>{
//     console.log('useLayoutEffect height',boxRef.current.offsetHeight);
//   },[])
//   return (
//     <>
//      <div ref={boxRef} style={{height:100}}>

//      </div>
//     </>
//   )
// }

// function App() {
//   const [content,setContent] = useState('물론입니다. 아래는 200자 정도의 한국어 문장입니다:한국은 아름다운 자연경관과 현대적인 도시가 조화를 이루는 나라입니다. 서울은 번화한 도심과 전통적인 궁궐이 공존하는 대표적인 도시로, 많은 관광객들이 찾는 곳입니다. 또한 사계절이 뚜렷한 기후 덕분에 각 계절마다 다른 매력을 느낄 수 있습니다. 봄에는 벚꽃이 피고, 여름에는 푸른 녹음이 짙으며, 가을에는 단풍이 물들고, 겨울에는 하얀 눈으로 뒤덮여 또 다른 아름다움을 자랑합니다. 한국의 문화와 자연을 함께 즐기고 싶은 사람들에게 이곳은 최고의 여행지 중 하나입니다.');
//   const ref =useRef();
//   // useEffect(()=>{
//   //    setContent('曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：‘我爱你’。如果非要给这份爱加上一个期限，我希望是一万年。');
//   //    ref.current.style.height='200px';
//   // },[])
//   useLayoutEffect(()=>{
//     // 阻塞渲染  同步的感觉，但不是同步的 
//     setContent('曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：‘我爱你’。如果非要给这份爱加上一个期限，我希望是一万年。');
//      ref.current.style.height='200px';

//   },[])
//   return (
//     <div ref={ref} style={{height:'50px',background:'lightblue'}}> 
//     {content}
//     </div>
//   )
// }

// 弹窗
function Modal() {
  // 响应式对象
  const ref =useRef();
  useLayoutEffect(()=>{
    const height=ref.current.offsetHeight;
    ref.current.style.marginTop=`${(window.innerHeight-height)/2}px`;
  },[]);

  return <div ref={ref} style={{background:'red',position:'absolute',height:'200px',width:'200px'}}>我是弹窗</div>
}
function App() {
  return (
    <>
      <Modal />
    </>
  )
}
export default App
