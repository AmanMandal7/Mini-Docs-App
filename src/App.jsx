import React from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='relative w-full h-screen bg-[#242424]'>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App