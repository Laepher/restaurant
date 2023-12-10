import React from 'react'
import Image from 'next/image'
import { ProductType } from '@/types/types';

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json()
}

const Featured = async () => {
  const featuredProducts:ProductType = await getData()
  return (
    <div className='w-full overflow-x-scroll text-yellow-500'>
      <div className='w-max flex'>
        {featuredProducts.products.map((item) => (
          <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-yellow-100 transition-all duration-300 md:w-[50vw] lg:w-[33vw] lg:h-[70vh] xl:w-[25vw] xl:h-[80vh]'>
            {item.img && (
            <div className='relative flex-1 w-full'>
              <Image src={item.img} alt='' fill className='object-contain' />
            </div>
            )}
            <div className='flex-1 flex flex-col gap-3 items-center justify-center text-center'>
              <h1 className='text-xl font-bold uppercase xl:text-2xl'>
                {item.title}
              </h1>
              <p className='p-2'>{item.desc}</p>
              <span className='text-xl font-bold'>Rp {item.price}00</span>
              <button className='rounded-md bg-yellow-500 text-white p-2'>Tambah ke keranjang</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Featured
