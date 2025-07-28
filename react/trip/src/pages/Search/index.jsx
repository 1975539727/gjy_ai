import SearchBox from "@/components/SearchBox";
import useSearchStore from "@/store/useSearchStore";
import styles from './search.module.css';
import {
    useState
} from 'react';

const Search = () => {
    const [query, setQuery] = useState("");
    const {
        suggestList,
        setSuggestList
    } = useSearchStore();
    // 单向数据流
    // 反复生成 useCallback
    const handleQuery = (query) => {
        // api 请求
        console.log('debounce后', query);
        setQuery(query);
        if (!query) {
            return;
        }
        
        setSuggestList(query);
    }

    const suggestListStyle = {
        display: query == ""? 'none': 'block'
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <SearchBox handleQuery={handleQuery} />
                <div className={styles.list} style={suggestListStyle}>
                {
                   suggestList.map(item => (
                        <div key={item} className={styles.item}>
                        {item}
                        </div>
                   )) 
                }
                </div>
            </div>
        </div>
    )
}

export default Search