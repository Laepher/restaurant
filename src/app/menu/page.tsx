import React from 'react'
import Link from 'next/link'
import { MenuType } from '@/types/types'

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json()
}

const MenuPage = async () => {
  const menu: MenuType = await getData()
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center text-yellow-500 font-bold'>
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className='w-full h-1/2 items-center bg-cover p-8 md:h-1/2 hover:bg-yellow-100 transition-all duration-300'
          style={{ backgroundImage: `url(${category.img})` }}>
          <div className='w-1/2'>
            <h1 className='uppercase text-2xl'> {category.title} </h1>
            <p className='mt-2'> {category.desc} </p>
            <button className='text-white bg-yellow-500 rounded-md p-2 mt-2'>Lihat Selengkapnya</button>
          </div>
        </Link>
      ))}
    </div>
  )
}
export default MenuPage
