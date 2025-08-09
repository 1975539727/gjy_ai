import {create }from "zustand";
import {
    getImages
} from '../api/home'

export const useImageStore = create((set,get) => ({
    images: [],
    page:1,
    loading:false,
    fetchMore:async ()=>{
        // 如果还在请求中，就不请求了
        if(get().loading) return;
        set({loading:true}) //请求中
        const res =await getImages(get().page); //请求数据\
        console.log(res)
        const newImages = res.data.data;
        // 之前的状态 
        set((state)=>({
            images:[...state.images,...newImages], //合并数据
            page:state.page+1, //页码+1
            loading:false //请求结束
        }))
    }
}))