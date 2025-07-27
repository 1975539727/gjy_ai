import React, { useState } from 'react';
import { Search} from 'react-vant';
import {useRecentStore} from '../../store/recent'
import styles from './index.module.css' // 引入CSS模块，用于样式管理
const TopSearch = () => {
  const [value, setValue] = useState('');
  const {add} = useRecentStore();
  const handleSearch = () => {
    add({title:value});
    setValue('');
  }
  return (
    <div className={styles.topSearchContainer}>
        <Search
        value={value}
        onChange={setValue}
        placeholder="请输入搜索关键词"
        showAction
        
        />
        <button onClick={handleSearch}>确认搜索</button>
    </div>
  );
}
export default TopSearch