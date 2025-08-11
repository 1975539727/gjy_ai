import {
  useState
} from 'react'
import {
  Image,
  Cell,
  CellGroup,
  ActionSheet,
  Loading,
  Toast,
  Dialog
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
import LoginPopup from '@/components/LoginPopup'
const Profile = () => {
  const { logout } = useUserStore() 
  const [showActionSheet, setShowActionSheet] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showLoginPopup, setShowLoginPopup] = useState(false) // 控制登录弹窗显示
  const [userInfo, setUserInfo] = useState(
    {
      nickname: '奶龙',
      level: '5级',
      slogan: '保持热爱，奔赴山海。',
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
  }
  )
  const Logout = async () => {
    await logout() // 调用全局状态登出
    Toast.success('退出成功')
  }
  const handleAction = async (e) => {
    setShowActionSheet(false)
    setLoading(true)
    try {
      if (e.type === 1) {
        const text = `昵称:${userInfo.nickname}, 格言:${userInfo.slogan}`
        const newAvatar = await generateAvater(text)
        setUserInfo(prev => ({ ...prev, avatar: newAvatar }))
      } else if (e.type === 2) {
        // 上传头像逻辑（可后续实现）
      }
    } catch (err) {
      console.error('头像处理失败:', err)
    } finally {
      setLoading(false)
    }
  }
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
  ]

  return (
    <div className={styles.container}>
      {localStorage.getItem('token') ? (
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
      ) : (
        <div className={styles.user}>
          <button onClick={() => setShowLoginPopup(true)} className={styles.loginBtn}>
            请登录
          </button>
        </div>
      )}

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
      <CellGroup inset className={styles.cellGroup} style={{ marginTop: '1rem' }}>
        <Cell 
        title="退出登录"   
        icon={<ServiceO />} 
        isLink  
        onClick={() =>
          Dialog.confirm({
            title: '标题',
            message: '代码是写出来给人看的，附带能在机器上运行',
            onCancel: () => console.log('cancel'),
            onClick: Logout,
          })
        }
        />
      </CellGroup>

      {/* 操作弹窗 */}
      <ActionSheet
        visible={showActionSheet}
        actions={actions}
        cancelText="取消"
        onCancel={() => setShowActionSheet(false)}
        onSelect={handleAction}
      />

       <LoginPopup
        visible={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
       />

      {/* 全局 loading */}
      {loading && (
        <Loading
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2000
          }}
        >
          正在生成头像...
        </Loading>
      )}
    </div>
  )
}

export default Profile