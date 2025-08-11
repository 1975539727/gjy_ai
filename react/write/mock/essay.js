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

// 生成热门作文数据的函数
const getHotEssays = (page, pageSize = 10) => {
  return Array.from({ length: pageSize }, (_, i) => ({
    id: `${page}-${i}`,
    title: Mock.Random.ctitle(5, 20), // 随机生成中文标题
    author: Mock.Random.cname(), // 随机生成中文姓名
    content: Mock.Random.cparagraph(1, 5), // 随机生成中文段落
    viewCount: Mock.Random.integer(100, 10000), // 随机生成浏览量
    likeCount: Mock.Random.integer(0, 5000), // 随机生成点赞数
    createTime: Mock.Random.date('yyyy-MM-dd') // 随机生成日期
  }));
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
   },
   {
    // 热门作文接口，支持分页 ?page=1
    url: '/api/hot-essays',
    method: 'get',
    response: ({ query }) => {
      const page = Number(query.page) || 1;
      return {
        code: 0,
        data: getHotEssays(page)
      };
    }
   }
] 