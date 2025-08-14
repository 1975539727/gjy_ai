import { useState, useEffect } from 'react';
import styles from './search.module.css';

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);

    // 组件加载时从 localStorage 读取搜索历史
    useEffect(() => {
        const savedHistory = localStorage.getItem('searchHistory');
        if (savedHistory) {
            setSearchHistory(JSON.parse(savedHistory));
        }
    }, []);

    // 更新 localStorage 中的搜索历史
    useEffect(() => {
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }, [searchHistory]);

    const handleSearch = () => {
        if (searchText.trim()) {
            // 避免重复搜索内容
            if (!searchHistory.includes(searchText.trim())) {
                setSearchHistory([searchText.trim(), ...searchHistory.slice(0, 9)]);
            }
            setSearchText('');
            // 这里可以添加实际的搜索逻辑，例如调用 API
            console.log('执行搜索:', searchText.trim());
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={styles.searchInput}
                    placeholder="请输入搜索内容"
                />
                <button onClick={handleSearch} className={styles.searchButton}>搜索</button>
            </div>
            {searchHistory.length > 0 && (
                <div>
                    <h3 className={styles.historyTitle}>搜索历史</h3>
                    <ul className={styles.historyList}>
                        {searchHistory.map((item, index) => (
                            <li key={index} className={styles.historyItem}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Search;