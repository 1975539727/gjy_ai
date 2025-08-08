import Mock from 'mockjs';
// 每页10个 
const getImages=(page,pageSize=10)=>{
   return Array.from({length:pageSize},(_,i)=>({
        // 索引唯一 
        id:`${page}-${i}`,
        height:Mock.Random.integer(300,600),
        url:Mock.Random.image('300x400',Mock.Random.color(),'#fff','img')
   }))
}

export default [
   {
        // ?page=1  queryString
        url:'/api/images',
        method:'get',
        response:({query})=>{
        const page=Number(query.page) || 1;
        return {
                code:0,
                data:getImages(page)
        }
        },
   }
]