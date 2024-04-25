import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita!",
      fileSize: "0.4 Mb",
      close: false,
      tag: {
        isOpen: false,
      }
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, reiciendis!",
      fileSize: "0.9 Mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Downloading...",
        tagColor: "#3b5df3"
      }
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, reiciendis!",
      fileSize: "2.2 Mb",
      close: false,
      tag: {
        isOpen: false,
      }
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, reiciendis!",
      fileSize: "1.8 Mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Downloaded",
        tagColor: "#248124"
      }
    }
  ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-screen flex flex-wrap gap-[20px] pt-[180px] px-10'>
      {data.map((item, index)=> (
        <Card data={item} reference={ref}/>
      ))}
    </div>
  )
}

export default Foreground