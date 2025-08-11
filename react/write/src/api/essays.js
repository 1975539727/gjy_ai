import axios from './config'

export const getImages =(page) =>{
    return axios.get('/images',{
        params:{page}
    })
}

// 添加获取热门作文的接口
export const getHotEssays = () => {
    return axios.get('/hot-essays')
}