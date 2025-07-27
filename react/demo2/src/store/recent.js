import {
    create // 创建一个store 存状态的地方
} from 'zustand'

export const useRecentStore = create((set)=>({
    // 对象 
    // 状态
    // 修改状态的方法 
    recents :[
       {
        id:1,
        title:"标题1",
       },
       {
        id:2,
        title:"标题2",
       }
    ],
    // reducer 函数  规定状态怎么变
    add: (recent)=>set((state)=>({
        recents:[
            ...state.recents,
            {
                id:Date.now(),
                title:recent.title,
            }
        ]
    })),
    delete : (id) =>set((state)=>({
        recents:state.recents.filter(recent => recent.id !== id)
    })),
}))