import React from 'react'
import { FaPlus, FaPlusCircle } from 'react-icons/fa'
import { shopData } from '../data/shopData'
import { Link } from 'react-router-dom'
import { addToCart } from '../features/reducers/cartSlice'
import { useDispatch } from 'react-redux'

export default function () {
  const dispatch = useDispatch()
  const handleClick = (shop) => {
    dispatch(addToCart(shop))
  }
  return (
    <section className="relative px-4 py-10">
      <div className="container mx-auto flex flex-col gap-8">
        <div>
          <h1 className='text-2xl md:text-4xl font-bold text-burnt my-10'>List Products</h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
            {shopData.map(shop => (
              <aside key={shop.id} className="flex flex-col gap-4 bg-white rounded-xl shadow-sm group">
                <Link to={`/shop/${shop.id}`} className="relative overflow-hidden lg:w-full h-36 lg:h-60">
                <img src={shop.image} alt={shop.title} className="absolute left-0 top-0 object-cover object-top w-full h-full group-hover:scale-110" />
                </Link>
                <div className="flex gap-2 p-4 items-center">
                  <div className="flex flex-col gap-1 flex-1">
                    <h4 className="text-lg lg:text-2xl text-burnt font-bold">
                      {shop.category}
                    </h4>
                    <p className="text-base lg:text-lg font-semibold">{shop.title}</p>
                    <p className="text-base lg:text-lg text-primary font-bold">&#8358;{shop.price.toLocaleString()}</p>
                  </div>
                    <button onClick ={() => handleClick(shop)} className="cursor-pointer h-8 w-8 rounded-full bg-ivory text-light grid place-items-center text-base lg:text-lg font-bold">
                      <FaPlus /></button>
                  </div>
              </aside>
              ))
            }
          </div>
          </div>
        </div>
    </section>
  )
}
