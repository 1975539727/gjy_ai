import React, { useState } from 'react';
import styles from './categorylist.module.css'; // 确保文件名大小写一致

const Categorylist = () => {
    const [activeSections, setActiveSections] = useState({});

    const toggleSection = (section) => {
        setActiveSections((prevActiveSections) => ({ 
            ...prevActiveSections, 
            [section]: !prevActiveSections[section] 
        }));
    };

    return (
        <div className={styles['category-list']}>
            {/* 体裁作文 */}
            <div 
                className={`${styles['category-section']} ${activeSections['genre'] ? styles.active : ''}`} 
                onClick={() => toggleSection('genre')}
            >
                <h3>体裁作文</h3>
                <ul style={{ 
                    display: activeSections['genre'] ? 'block' : 'none',
                    maxHeight: activeSections['genre'] ? '500px' : '0',
                    opacity: activeSections['genre'] ? 1 : 0
                }}>
                    <li>写人作文</li>
                    <li>写景作文</li>
                    <li>写物作文</li>
                    <li>叙事作文</li>
                    <li>科幻作文</li>
                    <li>想象作文</li>
                </ul>
            </div>

            {/* 字数作文 */}
            <div 
                className={`${styles['category-section']} ${activeSections['wordCount'] ? styles.active : ''}`} 
                onClick={() => toggleSection('wordCount')}
            >
                <h3>字数作文</h3>
                <ul style={{ 
                    display: activeSections['wordCount'] ? 'block' : 'none',
                    maxHeight: activeSections['wordCount'] ? '500px' : '0',
                    opacity: activeSections['wordCount'] ? 1 : 0
                }}>
                    <li>100字作文</li>
                    <li>200字作文</li>
                    <li>300字作文</li>
                    <li>400字作文</li>
                    <li>500字作文</li>
                    <li>600字作文</li>
                </ul>
            </div>

            {/* 优秀作文 */}
            <div 
                className={`${styles['category-section']} ${activeSections['excellent'] ? styles.active : ''}`} 
                onClick={() => toggleSection('excellent')}
            >
                <h3>优秀作文</h3>
                <ul style={{ 
                    display: activeSections['excellent'] ? 'block' : 'none',
                    maxHeight: activeSections['excellent'] ? '500px' : '0',
                    opacity: activeSections['excellent'] ? 1 : 0
                }}>
                    <li>周记</li>
                    <li>日记</li>
                    <li>读书笔记</li>
                    <li>读书心得</li>
                    <li>读后感</li>
                    <li>观后感</li>
                </ul>
            </div>
        </div>
    );
}

export default Categorylist;