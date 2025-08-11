import {
    create
} from 'zustand'
import {
    doLogin
} from '../api/user'

export const useUserStore = create(set => ({
    user: null,// 用户信息
    isLogin: false, // 是否登录
    login: async ({username ,password}) => {
        console.log(username, password)
        const res = await doLogin({username, password});
        if (res.data.code === 1) {
            throw new Error(res.data.message); // 或者返回失败
        }
        console.log(res)
        const {token, data:user} = res.data;
        console.log(token, user,'____')
        localStorage.setItem('token', token);
        set({
            user,
            isLogin: true,
        })
    },
    logout: () => {
        localStorage.setItem('token','1');
        set({
            user: null,
            isLogin: false
        })
    }
}))