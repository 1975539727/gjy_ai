import React, { useEffect } from 'react';
import styles from './list.module.css';
import { useEssayStore } from '../../store/essaydata';

const List = () => {
    const { essays, loading, fetchEssays } = useEssayStore();

    useEffect(() => {
        fetchEssays();
    }, []);

    if (loading) {
        return <div>加载中...</div>;
    }

    return (
        <div className={styles.essayList}>
            {essays.map((essay) => (
                <div key={essay.id} className={styles.essayCard}>
                    <div className={styles.essayContent}>
                        <h3 className={styles.essayTitle}>{essay.title}</h3>
                        <div className={styles.essayMeta}>
                            <p>作者: {essay.author}</p>
                            <p>浏览量: {essay.viewCount}</p>
                            <p>点赞数: {essay.likeCount}</p>
                            <p>发布时间: {essay.createTime}</p>
                        </div>
                        <p className={styles.essayExcerpt}>{essay.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default List;