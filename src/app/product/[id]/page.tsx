import Price from '@/components/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'

const  SingleProductPage= () => {
  return (
    <div className='w-full p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-yellow-500 md:flex-row md:gap-8 md:items-center'>
      {singleProduct.img && (
        <div className='relative w-full h-1/2 md:h-[70%]'>
          <Image src={singleProduct.img} alt='' fill className='object-contain'/>
        </div>
      )}
      <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 w-full'>
        <h1 className='uppercase text-3xl font-bold xl:text-5xl'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id}/>
      </div>
    </div>
  )
}

export default SingleProductPage
