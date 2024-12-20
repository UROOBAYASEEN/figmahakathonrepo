"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaBell, FaExchangeAlt, FaFileInvoiceDollar, FaHeart } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'


import SideBar from './SideBar'


const Header = () => {
  const [hamburguer, sethamburguer] = useState(true)

  
  return (
    <div className=' flex justify-between mx-2'>
      
      <div className='flex justify-between relative gap-10'>
        
        
      <div className="md:hidden" onClick={
        ()=>{
          sethamburguer(!hamburguer)
        }
      }><GiHamburgerMenu className="font-bold text-3xl mt-5 " /></div>
      {
        hamburguer &&  <div className='fixed top-10'>
          <div className='z-[100%]'></div>

          </div>
      }
     
     
       <Link href="/"> <h1 className='text-2xl font-bold text-blue-700 text-center mt-4'>Mornet</h1></Link>
        <div className=' hidden lg:inline'>
        <input type='text' placeholder='search some thing here' className='w-[400px] text-center border border-gray-300  p rounded-lg my-5'></input>
        <CiSearch className='text-2xl absolute left-[135px] top-5' />
        <Link href="/Payment">   <FaExchangeAlt  className='text-2xl absolute left-[450px] top-5' /></Link></div>

      </div>
      <div className='flex gap-2'>
      
      <div className='rounded-full border border-gray-200  py-1 px-3 hidden md:flex'>
      <FaHeart className='text-2xl mt-4 
      ' />
      </div>
      
      <div className='rounded-full border border-gray-200 px-3 '>
      <FaBell className='text-2xl mt-4' />
      </div>
    
    
     
      <div className='rounded-full border border-gray-200 px-3  '>
     <Link href="/Payment"> <FaFileInvoiceDollar className='text-2xl mt-4' /></Link>
      </div>
     
     
     <Link href="/adimdashboard">
      <Image
      src={"data:image/jpeg;base64,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"}
      height={50}
      width={50}
      alt='thisisimag'
      className='rounded-full border border-gray-200 mt-1'
     
     
      /></Link>

      </div>

    </div>
  )
}

export default Header