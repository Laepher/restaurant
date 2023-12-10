"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Carticon from './Carticon'

const Menu = () => {
    const [open, setOpen] = useState(false)
    const links = [
        { id: 1, title:"Beranda", url: '/'},
        { id: 1, title:"Menu", url: '/menu'},
        { id: 1, title:"Jam Kerja", url: '/'},
        { id: 1, title:"Kontak", url: '/'}
    ]
    //temp
    const user = false
    return (
        <div>
            {!open ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className="w-6 h-6" onClick={() => setOpen(true)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className="w-6 h-6" onClick={() => setOpen(false)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            )}
            {open &&(
            <div className='bg-yellow-500 text-white absolute left-0 top-24 w-full
             h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-xl z-10'>
                {links.map(item=>(
                    <Link href={item.url} key={item.id} onClick={()=> setOpen(false)}>
                        {item.title}
                    </Link>
                ))}
                {!user ? (
                    <Link href="/login" onClick={()=> setOpen(false)}>Login</Link>
                ): (
                    <Link href="/oreders" onClick={()=> setOpen(false)}>Orders</Link>
                )}
                <Link href="/cart" >
                    <Carticon/>
                </Link>
            </div>)}
        </div>
    )
}

export default Menu
