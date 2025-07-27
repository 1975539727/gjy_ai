import {useRecentStore} from '../../store/recent'
import { Collapse } from 'react-vant';
import styles from './index.module.css' // 引入CSS模块，用于样式管理
const RecentSearch =()=>{
    const {recents}=useRecentStore();
    return (
    <Collapse initExpanded={['1']}>
        <Collapse.Item className={styles.recentContainer} title='搜索历史'>
        <div className={styles.recentContainer}>
          {
            recents.map((recent)=>
                (
                <button  className={styles.recent} key={recent.id}>
                 {recent.title}</button>
                  ))
          }
        </div>   
        </Collapse.Item>
    </Collapse>
    )
}
export default RecentSearch;