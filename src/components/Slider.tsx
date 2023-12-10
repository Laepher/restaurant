"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const data = [
  {
    id: 1,
    title: "Dibuat dengan Sepenuh Hati & Proses yang Baik",
    image: "/makanburger.jpg"
  },
  {
    id: 2,
    title: "Fast Delivery dengan packaging yang rapih",
    image: "/makanburger.jpg"
  },
  {
    id: 3,
    title: "Siap disantap dengan keadaan hangat dan fresh",
    image: "/makanburger.jpg"
  },
]
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(
  //     () => setCurrentSlide((prev) => (prev ===data.length -1 ? 0 : prev + 1)), 
  //     2000
  //   )
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:[calc(100vh-9rem)] lg:flex-row bg-yellow-50'>
      <div className='flex-1 flex items-center justify-center flex-col gap-8 text-yellow-500 font-bold'>
        <h1 className='text-4xl text-center uppercase p-4 md:p-10 md:text-5xl xl:text-6xl'>
          {data[currentSlide].title}
        </h1>
        <button className='bg-yellow-500 text-white  px-3 py-2'>Order Now!</button>
      </div>
      <div className='w-full flex-1 relative'>
        <Image src={data[currentSlide].image} alt='' fill className='object-cover' />
      </div>
    </div>
  )
}

export default Slider
