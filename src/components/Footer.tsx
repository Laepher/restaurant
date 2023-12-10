import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-12 px-10 md:px-10 py-4 lg:px-20 xl:px-40 text-yellow-500 flex items-center justify-between font-bold'>
      <Link href="/" className='text-xl md:font-bold md:text-center'>JERRY'S</Link>
      <p className='text-xl md:font-bold md:text-center'>FAST FOOD RESTAURANT</p>
    </div>
  )
}

export default Footer
