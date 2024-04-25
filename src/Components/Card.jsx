import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Card = ({data}) => {
  return (
    <div className='relative p-6 w-[190px] h-[240px] text-[#bababa] bg-[#121212] rounded-[35px] overflow-hidden'>
      <FaRegFileAlt />

      <p className='text-xs font-semibold leading-tight pt-3'>{data.desc}</p>

      <div className="footer absolute left-0 bottom-0 w-full min-h-12">
          <div className='flex items-center justify-between px-6 py-[25px]'>
              <p className='text-xs font-bold'>{data.fileSize}</p>
              {data.close ? <IoClose color={`${data.tag.tagColor}`}/> : (
                <div className='h-4 w-4 text-[#121212] bg-[#bababa] rounded-full flex items-center justify-center cursor-pointer'>
                  <FaArrowDownLong size='10px'/>
                </div>
              )}
              
          </div>
          {/* bg-[#248124] */}
          {/* bg-[${data.tag.tagColor}] */}
          {/* [${data.tag.tagColor}] */}
          {data.tag.isOpen && 
          <div className={`tag w-full h-[45px] bg-[${data.tag.tagColor}] flex items-center justify-center`}>
            <p className='leading-none font-medium text-[#dbdbdb] text-[15px]'>{data.tag.tagTitle}</p>
          </div>}
      </div>
    </div>
  )
}

export default Card