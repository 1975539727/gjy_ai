import styles from './searchbox.module.css';
import { useNavigate } from 'react-router-dom';
import { Search } from '@react-vant/icons';

const SearchBox = () => {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate('/search');
    };

    return (
        <div className={styles.searchContainer}>
            {/* <input 
                className={styles.searchInput} 
                type="text" 
                placeholder="请输入搜索内容" 
            /> */}
            <Search className={styles.searchIcon} onClick={handleSearchClick} />
        </div>
    );
};

export default SearchBox;
