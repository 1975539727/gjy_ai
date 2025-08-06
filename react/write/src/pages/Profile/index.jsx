import {
    useState
  } from 'react'
  import {
    Image,
    Cell,
    CellGroup,
    ActionSheet,
    Loading
  } from 'react-vant'
  import {
    ServiceO,
    FriendsO,
    StarO,
    SettingO,
  } from '@react-vant/icons'
import styles from './profile.module.css'
import { generateAvater } from '@/llm'
import { useUserStore } from '@/store/user'
const Profile = () => {
    const { user,isLogin } = useUserStore();
    const [userInfo, setUserInfo] = useState({
      nickname: '奶龙',
      level: '5级',
      slogan: '保持热爱，奔赴山海。',
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
    });
  
    const [showActionSheet, setShowActionSheet] = useState(false);
    const [loading, setLoading] = useState(false); // 新增 loading 状态
  
    const handleAction = async (e) => {
      setShowActionSheet(false);
      setLoading(true);
      try {
        if (e.type === 1) {
          const text = `昵称:${userInfo.nickname}, 格言:${userInfo.slogan}`;
          const newAvatar = await generateAvater(text);
          setUserInfo(prev => ({ ...prev, avatar: newAvatar }));
        } else if (e.type === 2) {
          
        }
      } catch (err) {
        console.error('头像处理失败:', err);
      } finally {
        setLoading(false);
      }
    };
  
    const actions = [
      {
        name: '🎨 AI生成头像',
        color: '#667eea',
        type: 1
      },
      {
        name: '🖼️ 上传头像',
        color: '#ee0a24',
        type: 2
      }
    ];
    
    return (
      <div className={styles.container}>
      { isLogin ? (
        <>
        {/* 用户信息 */}
        <div className={styles.user}>
          <Image
            round
            width="64px"
            height="64px"
            src={userInfo.avatar}
            style={{ cursor: 'pointer', border: '2px solid #667eea' }}
            onClick={() => setShowActionSheet(true)}
          />
          <div className="ml4">
            <div className={styles.nickname}>{userInfo.nickname}</div>
            <div className={styles.level}>{userInfo.level}</div>
            <div className={styles.slogan}>{userInfo.slogan}</div>
          </div>
        </div>
        </>
      ) :(
        <>
         <div className={styles.user}>
            <button className={styles.loginButton} onClick={() => window.location.href = '/login'}>
              请登录
            </button>
          </div>
        </>
      ) }
        {/* 功能菜单 */}
        <CellGroup inset className={styles.cellGroup}>
          <Cell title="服务" icon={<ServiceO />} isLink />
        </CellGroup>
  
        <CellGroup inset className={styles.cellGroup} style={{ marginTop: '1rem' }}>
          <Cell title="收藏" icon={<StarO />} isLink />
          <Cell title="朋友圈" icon={<FriendsO />} isLink />
        </CellGroup>
  
        <CellGroup inset className={styles.cellGroup} style={{ marginTop: '1rem' }}>
          <Cell title="设置" icon={<SettingO />} isLink />
        </CellGroup>
        {/* 操作弹窗 */}
        <ActionSheet
          visible={showActionSheet}
          actions={actions}
          cancelText="取消"
          onCancel={() => setShowActionSheet(false)}
          onSelect={handleAction}
        />
  
        {/* 全局 loading */}
        {loading&&<Loading
          
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2000
          }}
        >
          正在生成头像...
        </Loading>}
      </div>
    );
  };
  
  export default Profile;