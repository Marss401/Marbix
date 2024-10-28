import React from 'react'
import { marbix_about5 } from '../assets/images'
import { FaArrowRightToBracket } from 'react-icons/fa6'

export default function About() {
  return (
    <section className='relative px-4 py-10'>
      <div className="container mx-auto flex flex-col text-burnt md:flex-row md:items-center py-10 gap-8">
        <div className="lg:w-1/2">
          <img src={marbix_about5} alt="" className='w-full h-full object-cover' />
        </div>
        <div className="flex-1 min-h-10 w-full h-full">
          <h2 className=' text-2xl lg:text-3xl font-bold my-4'>About Us</h2>
          <p className='font-normal text-base leading-8 pb-10'> We believe that everyone has an inherent beauty that comes from just being uniquely YOU!. At Marbix, we strive to highlight individuality by selecting shade that would look amazing on every tone. It is our goal and infact our desire to hand pick and design products that gives you a confidence boost. BEING YOU IS ENOUGH, BEING YOU IS BEAUTIFUL.</p>
          <button onClick={() => handleClick()} className='flex hover:bg-burnt hover:text-ivory rounded-md cursor-pointer justify-center items-center gap-2 border-2 px-4 py-1 text-base lg:text-lg text-burnt bg-ivory'>Learn more<FaArrowRightToBracket /></button>
        </div>
      </div>
    </section>
  )
}
