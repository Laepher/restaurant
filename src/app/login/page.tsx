import Image from 'next/image'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
      <div className='h-full shadow-2xl flex rounded-md flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%]'>
        <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
          <Image src='/makanburger.jpg' alt='' fill className='object-cover'/>
        </div>
        <div className='p-10 flex flex-col gap-8 md:w-1/2 justify-center items-center'>
          <h1 className='font-bold text-xl xl:text-3xl'>Selamat Datang</h1>
          <p>Mau pesan di Jerry's? Login disini!</p>
          <button className='flex py-3 px-20 bg-yellow-500 rounded-md justify-center'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
