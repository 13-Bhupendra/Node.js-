import React from 'react'
import Home from './components/Home'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'

const App = () => {
  return (
    <div className='mainSection'>
      <LeftSidebar />
      <Home />
      <RightSidebar />
    </div>
  )
}

export default App
