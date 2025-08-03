import Logo from "@/components/Logo";
import Header from "@/components/Header";
import { Tabs } from 'react-vant'
import styles from './home.module.css'
const items = [
  { id:1 , title: '推荐' },
  {id:2, title: '作文分类' },
  {id:3, title: '热门作文' },
]
const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Logo />
      <Tabs 
        defaultActive={2} 
        className={styles.texttabs} 
        ellipsis={false} 
        lineWidth='0'
      >
        {items.map(item => (
          <Tabs.TabPane key={item.id} title={item.title} >
          </Tabs.TabPane>
        ))}
      </Tabs>
     </div>
  )
}
export default Home;