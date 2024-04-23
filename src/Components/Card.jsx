import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

const Card = () => {
  return (
    <div className='relative p-6 w-[190px] h-[250px] text-[#bababa] bg-[#121212] rounded-[40px] overflow-hidden'>
      <FaRegFileAlt />

      <p className='text-xs font-semibold leading-tight pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, reiciendis!</p>

      <div className="footer absolute px-6 left-0 bottom-0 w-full min-h-12">
          <div className='flex items-center justify-between'>
              <p className='text-xs font-bold'>0.4 Mb</p>
              <div className='h-4 w-4 text-[#121212] bg-[#bababa] rounded-full flex items-center justify-center cursor-pointer'>
                <FaArrowDownLong size='10px'/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Card