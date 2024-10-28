import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoWhatsapp } from 'react-icons/bi';

export default function Login() {
    return (
          <section className=" relative px-4 py-20 flex flex-col items-center justify-center ">
            <div className="container mx-auto flex flex-col gap-4 max-w-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between ">
                <label className="text-base lg:text-2xl font-medium text-burnt">Sign in with</label>
                <div>
                    <button type="button" className="mx-1 h-6 w-6  rounded-full bg-ivory hover:text-ivory hover:bg-burnt text-light shadow-[0_4px_9px_-4px_#3b71ca]">
                  <BiLogoWhatsapp className="flex justify-center items-center w-full"
                  />
                </button>
                <button
                  type="button"
                  className="mx-1 h-6 w-6 rounded-full bg-backdrop hover:bg-burnt uppercase leading-normal text-ivory shadow-[0_4px_9px_-4px_#3b71ca]"
                >
                  <AiOutlineInstagram className="flex justify-center items-center w-full"
                  />
                </button>
                </div>
              </div>
              <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-ivory after:mt-0.5 after:flex-1 after:border-t after:border-ivory">
                <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                  Or
                </p>
              </div>
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-newcolor rounded"
                type="text"
                placeholder="Email Address"
              />
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-newcolor rounded mt-4"
                type="password"
                placeholder="Password"
              />
              <div className="mt-4 flex justify-between font-semibold text-sm">
                <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                  <input className="mr-1" type="checkbox" />
                  <span>Remember Me</span>
                </label>
                <a
                  className="text-burnt hover:text-ivory hover:underline hover:underline-offset-4"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="text-center md:text-left">
                <button
                  className="mt-4 bg-newcolor hover:bg-burnt px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                Don&apos;t have an account?{" "}
                <a
                  className="text-burnt hover:underline hover:underline-offset-4"
                  href="#"
                >
                  Register
                </a>
              </div>
            </div>
          </section>
        );
      };

