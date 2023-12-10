import Image from 'next/image'
import React from 'react'

const ProductPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-yellow-500 lg:flex-row'>
        <div className='h-1/2 p-4 flex flex-col justify-center lg:h-full lg:w-2/3 2xl:w-1/2 2xl:px-20'>
          <div className='flex items-center justify-between mb-4'>
            <Image src='/temporary/cheeseburger.png' alt='' width={100} height={100}/>
            <div className=''>
              <h1 className='uppercase font-bold text-xl'>Cheese Burger</h1>
            </div>
            <h2 className='font-bold'>Rp 35.900</h2>
            <span className='cursor-pointer'>X</span>
          </div>
          <div className='flex items-center justify-between mb-4'>
            <Image src='/temporary/cheeseburger.png' alt='' width={100} height={100}/>
            <div className=''>
              <h1 className='uppercase font-bold text-xl'>Cheese Burger</h1>
            </div>
            <h2 className='font-bold'>Rp 35.900</h2>
            <span className='cursor-pointer'>X</span>
          </div>
        </div>
        <div className=' h-1/2 p-4 bg-yellow-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2'>
          <div className='flex justify-between'>
            <span className=''>Subtotal (2 item)</span>
            <span className=''>Rp 71.800</span>
          </div>
          <div className='flex justify-between'>
            <span className=''>Biaya Layanan</span>
            <span className=''>Rp 0</span>
          </div>
          <div className='flex justify-between'>
            <span className=''>Pengiriman</span>
            <span className=''>Rp 0</span>
          </div>
          <hr className=''/>
          <div className='flex justify-between'>
            <span className='font-bold'>Total</span>
            <span className='font-bold'>Rp 71.800</span>
          </div>
          <button className='uppercase bg-yellow-500 text-white rounded-md p-3 w-1/2'>Pesan</button>
        </div>
    </div>
  )
}

export default ProductPage
