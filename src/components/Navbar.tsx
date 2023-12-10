import React from 'react'
import Link from 'next/link'
import Menu from './Menu'
import Carticon from './Carticon'

const Navbar = () => {
  //temp
  const user = false
  return (
    <div className='h-12 text-yellow-500 p-4 flex items-center justify-between border-b-2 border-b-yellow-500 uppercase font-bold md:h-18 lg:px-20 xl:px-40'>
      <div className='hidden md:flex gap-4'>
        <Link href="/">Beranda</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Kontak</Link>
      </div>
      <div className='text-xl md:font-bold md:text-center'>
        <Link href='/'>Jerry's</Link>
      </div>
      <div className='md:hidden'>
        <Menu />
      </div>
      <div className='hidden md:flex gap-4 items-center justify-end '>
        <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-yellow-200 rounded-full px-3'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
          <span>0123 45667 8910</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <Carticon />
      </div>
    </div>
  )
}

export default Navbar
