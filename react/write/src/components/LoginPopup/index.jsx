import { useState,useEffect } from 'react'
import { Popup, Field, Button, Toast } from 'react-vant'
import { Contact, Lock, Close } from '@react-vant/icons'
import { useUserStore } from '@/store/user'

const LoginPopup = (props) => {
  const { visible, onClose } =props
  const { login } = useUserStore() 
  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const handleLogin = async () => {
    const { username, password } = form
    console.log(username, password)
    if (!username || !password) {
      Toast.fail('请填写用户名和密码')
      return
    }

     setSubmitting(true)
     console.log(username, password)
     console.log('onClose 函数已调用')
      console.log('当前 visible 值:', visible)
      await login({username, password}) // 调用全局状态登录
      Toast.success('登录成功')

      onClose() // 登录成功后关闭弹窗
      console.log('onClose 函数已调用')
      console.log('当前 visible 值:', visible)
      setSubmitting(false)
  }

  return (
    <Popup
      visible={visible}
      position="bottom"
      round
      closeable
      closeIcon={<Close />}
      onClose={onClose}
      style={{ maxHeight: '80vh', overflowY: 'auto' }}
    >
      <div style={{ padding: '20px' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>用户登录</h3>

        <Field
          label="用户名"
          placeholder="请输入用户名"
          leftIcon={<Contact />}
          value={form.username}
          onChange={(val) => setForm((prev) => ({ ...prev, username: val }))}
          clearable
        />

        <Field
          label="密码"
          placeholder="请输入密码"
          type="password"
          leftIcon={<Lock />}
          value={form.password}
          onChange={(val) => setForm((prev) => ({ ...prev, password: val }))}
          clearable
        />

        <Button
          block
          type="primary"
          style={{ marginTop: '24px' }}
          loading={submitting}
          onClick={handleLogin}
        >
          {submitting ? '登录中...' : '登录'}
        </Button>
        <Button
          block
          style={{ marginTop: '10px' }}
          onClick={onClose}
        >
          取消
        </Button>
      </div>
    </Popup>
  )
}

export default LoginPopup