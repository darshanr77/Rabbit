import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'

const CartItems = () => {

  const CartProducts = [
    {
      productId: "1",
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      prize: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: "2",
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      prize: 25,
      image: "https://picsum.photos/200?random=2",
    },
  ]

  return (
    <div>
      {CartProducts.map((product, index) => {
        return (
          <div
            key={index}
            className='flex items-center justify-between py-4 border-b'
          >
            <div className='flex items-start space-x-4'>
              <img
                src={product.image}
                alt={product.name}
                className='w-17 h-20 cursor-pointer object-cover rounded'
              />
              <div>
                <h3>{product.name}</h3>
                <p className='text-sm text-gray-500'>
                  Size: {product.size} | Color: {product.color}
                </p>
                <div className='flex items-center mt-2'>
                  <button className='rounded-xl  cursor-pointer text-2xl font-medium'>-</button>
                  <span className='mx-4'>{product.quantity}</span>
                  <button className='rounded-xl cursor-pointer text-2xl font-medium'>+</button>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-end'>
              <p>${product.prize.toLocaleString()}</p>
              <button>
                <RiDeleteBin3Line className='w-6 h-6 cursor-pointer mt-2 text-red-600' />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CartItems
