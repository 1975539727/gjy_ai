import Logo from "@/components/Logo";
import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";
import styles from './home.module.css';
import { Routes, Route, Link, Navigate, Outlet,useNavigate } from 'react-router-dom';
import { Tabs } from 'react-vant';

const items = [
  { id: 1, title: '热门作文', path: 'hot' },
  { id: 2, title: '作文分类', path: 'category' },
];

const NavBar = () => {
  const  navigate  = useNavigate(); // 解构出 navigate 函数
  // 处理 Tab 切换
  const handleTabChange = (index) => {
    const selectedItem = items[index];
    if (selectedItem) {
      navigate(selectedItem.path);
    }
  };

  return (
    <nav className={styles.navbar}>
      <Tabs 
        defaultActive={0} // 改为 0，因为数组索引从 0 开始
        onChange={handleTabChange} // 添加 onChange 事件
      >
        {items.map((item, index) => (
          <Tabs.TabPane 
            key={item.id} 
            title={item.title}
            // 不需要在内容区域放 Link
          >
            {/* Tab 内容区域，如果需要可以放内容 */}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </nav>
  );
};

const Home = () => {
  return (
    <div className={`${styles.container} ${styles.flexContainer}`}>
      <Header />
      <Logo />
      <SearchBox />
      <NavBar />
      <Outlet/>
    </div>
  );
};

export default Home;