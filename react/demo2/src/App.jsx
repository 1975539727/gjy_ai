import { useState } from 'react'
import './App.css'
import TopSearch from './components/TopSearch'
import TabItem from './components/TabItem'
import RecentSearch from './components/RecentSearch'
function App() {


  return (
    <>
      <TopSearch />
      <TabItem />
      <RecentSearch />
    </>
  )
}

export default App
