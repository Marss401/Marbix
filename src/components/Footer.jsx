import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-burnt text-ivory pt-10 pb-10">
      <div className='container mx-auto flex flex-col'>
        <div className="flex flex-col md:flex-row gap-8 p-8 lg:items-start lg:justify-between">
          <div className="flex flex-col gap-4 w-60">
            <h1 className="text-xl md:text-2xl z-20 font-bold uppercase">Marbix</h1>
            <p className=''>
            Keep up with our New Releases, beauty Tips and what we have been up to.
            </p>
            <div className="flex flex-col lg:flex-row gap-2">
             <div className="text-ivory text-base lg:text-md font-medium uppercase">Beauty</div>
              <div className="text-ivory text-base lg:text-md font-medium uppercase">Product</div>
              <div className="text-ivory text-base lg:text-md font-medium uppercase">Review</div>
              <div className="text-ivory text-base lg:text-md font-medium uppercase">Contact</div>
            </div>
          </div>
          <div className='flex flex-col gap-8 lg:items-start lg:justify-between'>
            <h4 className='text-xl md:text-xl z-20 font-semibold uppercase'>Subscribe</h4>
            <p className=''>Get 10% off your first order</p>
            <input
                className="text-sm w-full px-4 py-2 border border-solid border-newcolor rounded"
                type="text"
                placeholder="Email Address"
              />
        </div>
          <div className='text-xl md:text-xl flex flex-col gap-3 font-semibold'>
            <h4 className='uppercase'>Follow Us</h4>
            <div className='flex flex-col'>
              <div className='flex flex-row items-center gap-3 '>
                <div className=''><AiOutlineInstagram /></div>
                <p className=''>Instagram</p>
              </div>
              <div className='flex flex-row items-center gap-3'>
                <div className=''><AiOutlineTwitter /></div>
                <p className=''>Twitter</p>
              </div>
              <div className='flex flex-row items-center gap-3'>
                <div className=''><AiOutlineFacebook /></div>
                <p className=''>Facebook</p>
              </div>
            </div> 
          </div>
        </div>
      </div>
      <small className="pt-5 border-t border-light opacity-50 justify-center flex text-xs">&copy; Copyright{ new Date(). getFullYear()}. All rights reserved</small>
    </footer>
  )
}
