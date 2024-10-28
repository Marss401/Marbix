import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { marbix_brush1, marbix_concealers, marbix_face1, marbix_face2, marbix_foundation, marbix_product1, marbix_product2, marbix_product3 } from '../assets/images'
import HeroSlider from '../components/HeroSlider'
import { productData } from '../data/productData'
import { FaArrowRight } from 'react-icons/fa'
import { MdArrowOutward } from 'react-icons/md'
import Slider from '../components/BeautySlider'
import BeautySlider from '../components/BeautySlider'
import { itemData } from '../data/itemData'
import { IoStar, IoStarOutline, IoThumbsUp } from 'react-icons/io5'
import { reviewData } from '../data/reviewData'

export default function Home() {
  return (
    <main>
      <section className="relative px-4 py-10">
        <div className="container mx-auto py-10 gap-4 text-burnt flex flex-col-reverse md:flex-row">
          <div className="flex flex-col flex-1 justify-center items-start gap-4 py-10">
            <h2 className="font-bold text-3xl md:text-5xl leading-tight max-w-sm py-10 uppercase">
              Suitable For All Skin Types</h2>
              <p className="font-md max-w-xs text-sm lg:text-base leading-8 pb-10">
                What makes us different? We provide products that are perfect for glam sessions that suit your personality.
              </p>
              <Link to={"/shop"} className="flex hover:bg-burnt hover:text-ivory rounded-md cursor-pointer justify-center items-center gap-2 border-2 px-4 py-1 text-base lg:text-lg text-burnt bg-ivory"><HiOutlineShoppingBag />Shop skincare</Link>
          </div>
          <div className="relative flex-1 min-h-10 w-full h-full">
            <img src={marbix_face2} alt="Main Image" className="object-center object-cover w-full h-full"/>
            <img src={marbix_product3} alt="Product Image" className="absolute -left-[23%] bottom-10 h-[35%] w-[62%] object-cover object-center" />
          </div>
        </div>
      </section>
      <section className="relative px-4 py-10">
        <div className="container mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h4 className="text-3xl lg:text-5xl text-burnt lg:max-w-xs font-bold uppercase tracking-tighter">
              Product That<span className="text-ivory"> Works</span> 
            </h4>
            <p className="text-justify font-semibold text-burnt text-sm lg:text-base lg:max-w-md">
            Our team of aesthesians and lab scientists have formulated products that is tailored based on our client's preferences and individuality. We recommend the quality and effective products that suit and enhance your complexion. 
            </p>
          </div>
        </div>
      </section>
      <section className="relative px-4 py-10">
        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <div className="min-h-40 md:mr-5">
            <HeroSlider  />
          </div>
          {productData.map(beauty => (
              <aside 
                key={beauty.id} className="flex relative flex-col items-start bg-newcolor p-4 gap-4 rounded-3xl">
                  <Link to={`/product/${beauty.id}`}></Link>
                  <img src={beauty.image} alt={beauty.title} className="absolute left-5 top-5 object-cover w-12 h-12 rounded-full"/>
                  <div className="flex flex-row gap-2 pt-12 justify-center items-center">
                    <h4 className="text-lg lg:text-2xl text-light font-bold">{beauty.title}</h4>
                    <button onClick={() => handleClick(beauty)} className="cursor-pointer h-5 w-5 rounded-full bg-burnt text-ivory flex items-center justify-center text-base lg:tetx-lg font-semibold"><MdArrowOutward /></button>
                  </div>
                  <p className="text-base lg:text-md text-light max-w-xs pb-2">{beauty.description}</p>
              </aside>
            ))
          }
        </div>
      </section>
      <section className="relative px-4 py-10">
        <div className="container mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between">
            <h3 className="text-3xl lg:text-4xl text-burnt lg:max-w-md font-bold uppercase tracking-tighter">Our popular product</h3>
            <div className="flex flex-row gap-4 text-base lg:text-xs tracking-tighter font-semibold">
              <Link to={BeautySlider} className="text-burnt gap-8 text-base hover:text-ivory lg:text-xl uppercase">Foundation</Link>
              <Link to={BeautySlider} className="text-burnt gap-8 text-base hover:text-ivory lg:text-xl uppercase">Blushes</Link>
              <Link to={BeautySlider} className="text-burnt gap-8 text-base hover:text-ivory lg:text-xl uppercase">Serum</Link>
              <Link to={BeautySlider} className="text-burnt gap-8 text-base lg:text-xl hover:text-ivory relative pb-2 uppercase after:h-1 after:bg-ivory after:absolute after:bottom-0 after:left-0 after:w-8 font-semibold">All</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {itemData.map(skin => (
              <aside 
                key={skin.id} className="flex flex-col bg-backdrop gap-4 group">
                  <div
                  className="relative overflow-hidden lg:w-full h-36 lg:h-72"
                >
                  <img src={skin.image} alt={skin.title} className="absolute p-4 left-0 top-0 object-cover w-full h-full group-hover:scale-110"/>
                </div>
                <div className="flex gap-1 p-4 items-center">
                  <div className="flex flex-col  text-burnt gap-1 flex-1">
                    <h4 className="text-lg lg:text-2xl text-dark font-bold">
                      {skin.category}
                    </h4>
                    <p className="text-base lg:text-lg font-semibold">{skin.title}</p>
                  </div>
                  <div className='text-base lg:text-lg text-minor font-semibold'>&#8358;{skin.price.toLocaleString()}</div>
                </div>
                <div className='mx-5 lg:mx-20 my-5'>
                  <Link to={"/shop"} className="flex hover:bg-burnt hover:text-ivory rounded-md cursor-pointer justify-center items-center gap-2 border-2 px-4 py-1 text-base lg:text-lg text-burnt bg-ivory "><HiOutlineShoppingBag />{skin.description}</Link>
                </div>
              </aside>
            ))}
          </div>
        </div>
      </section>
      <section className="relative px-4 py-10">
        <div className="container mx-auto flex flex-col gap-8">
          <div className="flex justify-center items-center text-center">
            <h4 className="text-3xl lg:text-5xl text-burnt font-semibold lg:max-w-3xl">Curated with <span className="text-ivory">Premium </span>Products for Self Care</h4>
          </div>
          <div className="min-h-auto w-full">
            <BeautySlider />
          </div>
        </div>
      </section>
      <section className="relative py-10 px-4">
        <div className="container mx-auto flex flex-col gap-8">
          <div className="flex text-center lg:items-center lg:justify-center">
            <h4 className="text-3xl lg:text-5xl text-burnt font-semibold">
              Our <span className="text-ivory"> Customer</span> Testimonies
            </h4>

          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto grid-flow-dense'>
          {
              reviewData.map(review => (
                <aside key={review.id} className={`p-4 flex flex-col gap-4 bg-slate-/30 ${review?.productImage ? 'row-span-2': 'row-span-1'}`}>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center w-max">
                    <img src={review.image} alt={review.name} className="h-4 w-4 md:h-8 md:w-8 rounded-full flex-shrink-0 object-cover" />
                    <div className="">
                      <h5 className="text-base lg:text-lg font-semibold text-prime">
                        {review.name}
                      </h5>
                      <div className="flex gap-1 text-primary text-xs lg:text-sm">
                        {Array(review.rating).map((ei,i) => <IoStar key={i} />)}
                        <IoStarOutline />
                      </div>
                    </div>
                  </div>
                  <IoThumbsUp className="text-slate-300" />
                </div>
                  {review?.productImage && <img src={review.productImage} alt="" className="object-cover w-full h-32 lg:h-48" />}
                  <p className="text-base lg:text-lg text-prime font-medium text-justify leading-loose">{review.text}</p>
                </aside>
              ))
            }
         
          
          </div> 
        </div>
      </section>
    </main>
  )
}
