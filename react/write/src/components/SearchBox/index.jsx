import { Search } from '@react-vant/icons';
import styles from './searchbox.module.css';
import { useState } from 'react';

const SearchBox = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        // 这里可以添加搜索逻辑，例如调用 API
        console.log('搜索内容:', searchText);
    };

    return (
        <div className={styles.searchBox}>
            <input 
                className={styles.searchTxt} 
                type="text" 
                placeholder="Type to search" 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <a href="#" className={styles.searchBtn} onClick={(e) => {
                e.preventDefault();
                handleSearch();
            }}>
                <Search className={styles.icon} />
            </a>
        </div>
    );
};

export default SearchBox;
