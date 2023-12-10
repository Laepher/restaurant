"use client"

import React, { useEffect, useState } from 'react'

type Props = {
    price: number;
    id: number;
}

const Price = ({price, id}: Props) => {
    const [total,setTotal] = useState(price)
    const [quantity,setQuantity] =useState(1)

    useEffect(() =>{
        setTotal(quantity * (price))
    },[quantity, price])

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>Rp {total.toFixed(1)}00</h2>
      <div className='flex justify-between items-center'>
        <div className='flex justify-between w-full p-3 ring-1 ring-yellow-500'>
            <span>Jumlah</span>
            <div className='flex gap-2 items-center'>
                <button onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1: 1))}>{"<"}</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}>{">"}</button>
            </div>
        </div>
        <button className='uppercase 2-56 bg-yellow-500 text-white p-3 ring-1 ring-yellow-500'>Tambah</button>
      </div>
    </div>
  )
}

export default Price
