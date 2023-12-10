import React from 'react'

const OrdersPage = () => {
  return (
    <div className='p-4 lg:px-28 xl:px-40'>
      <table className='w-full border-separate border-spacing-1'>
        <thead>
            <tr className='text-left'>
                <th className='hidden md:block'>ID Order</th>
                <th>Tanggal</th>
                <th>Harga</th>
                <th className='hidden md:block'>Pesanan</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr className='text-sm md:text-base bg-red-100'>
                <td className='hidden md:block py-6 px-1'>123456</td>
                <td className='py-6 px-1'>11.12.2023</td>
                <td className='py-6 px-1'>71.800</td>
                <td className='hidden md:block py-6 px-1'>Cheese Burger (2)</td>
                <td className='py-6 px-1'>Otw</td>
            </tr>
            <tr className='text-sm md:text-base odd:bg-gray-100'>
                <td className='hidden md:block py-6 px-1'>123456</td>
                <td className='py-6 px-1'>11.12.2023</td>
                <td className='py-6 px-1'>71.800</td>
                <td className='hidden md:block py-6 px-1'>Cheese Burger (2)</td>
                <td className='py-6 px-1'>Otw</td>
            </tr>
            <tr className='text-sm md:text-base odd:bg-gray-100'>
                <td className='hidden md:block py-6 px-1'>123456</td>
                <td className='py-6 px-1'>11.12.2023</td>
                <td className='py-6 px-1'>71.800</td>
                <td className='hidden md:block py-6 px-1'>Cheese Burger (2)</td>
                <td className='py-6 px-1'>Otw</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage
