import React from 'react'
import { Tabs } from 'react-vant'


const items = [
    {
        id:1,
        title:'综合'
    },
    {
        id:2,
        title:'文章'
    },
    {
        id:3,
        title:'课程'
    },
    {
        id:4,
        title:'标签'
    },
    {
        id:5,
        title:'用户'
    }
]

const TabItem = () => {
  return (
    <div className='demo-tabs'>
      <Tabs defaultActive={2}>
        {items.map((item)=>(
          <Tabs.TabPane key={item.id} title={item.title}>
           
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}
export default TabItem
