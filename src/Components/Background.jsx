import React from 'react'

const Background = () => {
  return (
    <div className='fixed z-[2] w-full h-screen'>
        <nav className='w-full absolute top-[5%] flex justify-center py-10 text-[20px] font-semibold text-[#4c4c4c]'>Documents</nav>
        <h1 className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-[15vw] text-[#131313] leading-none tracking-tighter font-semibold'>Docs.</h1>
    </div>
  )
}

export default Background