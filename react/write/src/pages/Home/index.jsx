import Logo from "@/components/Logo";
import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";
import styles from './home.module.css';

import {
  Routes,
  Route,
  Link,
  Navigate, // 新增：用于路由重定向
  Outlet
} from 'react-router-dom'

const items = [
  { id: 1, title: '推荐', path: 'recommend' }, // 去掉开头的斜杠，变成相对路径
  { id: 2, title: '作文分类', path: 'category' },
  { id: 3, title: '热门作文', path: 'hot' },
];

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      {items.map(item => (
        <Link key={item.id} to={item.path} >
          {item.title}
        </Link>
      ))}
   </nav>
  );
};

const Home = () => {
  return (
    <div className={styles.container}>
      {/* 这些组件会保持不变 */}
      <Header />
      <Logo />
      <SearchBox />
      <NavBar />
      <Outlet/>
      
    </div>
  );
};

export default Home;