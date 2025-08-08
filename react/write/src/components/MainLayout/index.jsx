import {
    Outlet,
    useNavigate,
    useLocation
} from 'react-router-dom'
import {
    HomeO,
    Fire,
    UserO,
    Star
} from '@react-vant/icons';
import { Tabbar } from'react-vant';
import { useState,useEffect } from'react';
const tabs =[
    { icon: <HomeO />, title: '首页', path: '/home'},
    { icon: <Star color='#FF4500' />, title: '推荐', path: "/recommend"},
    { icon:<Fire  color='#FF4500'/>,title:'AI小助手',path:'/aiwrite'},
    { icon: <UserO />, title: '我的', path: '/profile'}
]
const MainLayout =()=>{
    const [active,setActive] = useState(0);
    const navigate =useNavigate();
    const location =useLocation();
    useEffect(()=>{
        console.log(location.pathname,'///');
        const index=tabs.findIndex(
            tab => location.pathname.startsWith(tab.path)
        )
        setActive(index)
    },[location.pathname])
    return(
     <div  
        className='flex flex-col h-screen'
        style={{paddingBottom:'50px'}}
     >
        <div className='flex-1' >
            <Outlet/>
        </div>
        
        {/* tabbar */}
        <Tabbar value={active} onChange={
            (key) => { 
                setActive(key) 
                navigate(tabs[key].path)
            }} 
            style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }}
            >
            {tabs.map((tab, index) => (
                        <Tabbar.Item 
                            key={index} 
                            icon={tab.icon}
                            title={tab.title}
                            // 确保当前项索引与 active 状态匹配
                            active={index === active}
                        > 
                        {tab.title}
                        </Tabbar.Item>
                    ))}
        </Tabbar>
     </div>
    )
}
export default MainLayout;