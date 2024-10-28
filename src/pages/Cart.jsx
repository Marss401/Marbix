import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeInCart, removeFromCart } from '../features/reducers/cartSlice'
import { IoCloseOutline, IoWalletOutline } from 'react-icons/io5'
import { BiSolidCart } from 'react-icons/bi'

export default function Cart() {
  const cartContents = useSelector(state => state.cart)
  const dispatch = useDispatch()
  return (
    <main className="py-20 min-h-[70vh]">
      <section className="container mx-auto"> <div className="bg-backdrop shad rounded-md p-4 max-w-screen-md mx-auto relative">
        <div className="flex items-center gap-4 justify-between">
          <h3 className="text-2xl md:text-4xl font-bold text-burnt">Marbix<span className="text-ivory"> Cart</span></h3>
          <div className="h-8 w-8 text-burnt hover:text-newcolor cursor-pointer flex justify-center items-center text-lg relative md:scale-125 -translate-x-1"><BiSolidCart />
            <div className="absolute h-4 w-4 grid place-items-center text-light bg-darkred rounded-full -top-0.5 -right-0.5 text-xs">{cartContents.length}</div>
          </div>
        </div>
        <div className="flex flex-col py-4 divide-y divide-burnt/20">
          {
            cartContents.map((el, i)=> (
              <aside key={el.id} className="p-2 flex items-center gap-2 justify-between relative">
                <button onClick={() => dispatch(removeFromCart(i))} className="h-5 w-5 text-lg grid place-items-center bg-slate-100 text-ivory cursor-pointer absolute -top-2 -right-1 rounded-full">
                  <IoCloseOutline />
                </button>
                <div className="flex gap-2 items-center flex-1">
                  <img src={el.image} alt="" className="h-12 w-12 md:h-16 md:w-16 rounded-md object-cover flex-shrink-0" />
                  <div className="flex flex-col text-prime">
                    <h4 className="text-lg md:text-xl font-semibold">{el.title}</h4>
                    <p className="text-sm md:text-base opacity-70 font-medium">&#8358;{el.price.toLocaleString()}</p>
                  </div>
                </div>
                <p className="text-sm md:text-base opacity-70 font-medium flex-1 text-center">&#8358;{(el.qty * el.price).toLocaleString()}</p>
                <div className="border border-burnt/20 rounded-md w-10 h-8 overflow-hidden">
                  <input onChange={e => dispatch(changeInCart({id: el.id, qty: e.target.value}))} type="number" min={1} value={el.qty} className="bg-light w-16 px-2 outline-none pt-0.5 pl-2.5 text-sm md:text-base" />
                </div>
              </aside>
            ))
          }
        </div>
        <div className="flex flex-col border-t border-burnt/20 border-solid divide-y divide-burnt/20 text-minor py-2">
            <div className="flex justify-between items-center gap-2 py-1 px-2 text-sm md:text-base">
              <p className="opacity-60">Subtotal:</p>
              <p className="font-semibold">&#8358;{cartContents.reduce((total, el) => el.price * el.qty + total, 0).toLocaleString()}</p>
            </div>
            <div className="flex justify-between items-center gap-2 py-1 px-2 text-sm md:text-base">
              <p className="opacity-60">Discount Applied:</p>
              <p className="font-semibold text-burnt">(&#8358;5,000)</p>
            </div>
            <div className="flex justify-between items-center gap-2 py-1 px-2 text-sm md:text-base">
              <p className="opacity-60">Electricity VAT:</p>
              <p className="font-semibold">0</p>
            </div>
            <div className="flex justify-between items-center gap-2 py-1 px-2 text-sm md:text-base">
              <p className="opacity-60">Grand Total:</p>
              <p className="text-base md:text-lg font-bold">&#8358;{(cartContents.reduce((total, el) => el.price * el.qty + total, 0) - 5000).toLocaleString()}</p>
            </div>
            <button className='bg-ivory hover:bg-burnt text-white text-base md:text-lg rounded-md flex justify-center items-center gap-2 mt-2 p-2 '><IoWalletOutline /> Proceed to Checkout</button>
            <p className="opacity-60 text-xs text-center pt-1">100% Secure with MasterCard, Paystack and Flutter Technology</p>
          </div>
      </div>
      </section>
    </main>
  )
}