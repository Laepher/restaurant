import { burgers } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-yellow-500'>
      {burgers.map((item)=>(
        <Link className='w-full h-[60vh] border-r-2 border-b-2 border-yellow-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-yellow-50' 
        href={`/product/${item.id}`} key={item.id}>
          {item.img &&(
            <div className='relative h-[80%]'>
              <Image src={item.img} alt='' fill className='object-contain'/>
            </div>
          )}
          <div className='flex items-center justify-between font-bold'>
            <h1 className='uppercase text-2xl p-2'>{item.title}</h1>
            <h2 className='text-xl group-hover:hidden'>Rp {item.price}00</h2>
            <button className='hidden group-hover:block uppercase bg-yellow-500 text-white p-2 rounded-md'>Tambah</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage
