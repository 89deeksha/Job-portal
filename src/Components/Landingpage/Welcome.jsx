import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


function Welcome() {
  return (
    <>
    <div className=' flex flex-col   py-2 justify-center  bg-gradient-to-br from-indigo-500 to-blue-600 text-white px-4  '>
        <h1 className="text-5xl font-bold mb-4 justify-center px-100">Welcome to Jobboard</h1>
        <p className="text-xl mb-6 text-center justify-center ">
          Connect job seekers, hiring managers, and recruiters — all in one place.
        </p>
    </div>
    <div className='h-10 bg-gray-300 mt-40 flex justify-center gap-2 py-2'>
        <div className='flex gap-20'>
        <div className='px-20 '> <span className='font-bold '>Job board.com</span> All rights reserved &copy; 2025</div>
        <div className='flex gap-2 mt-1'>
    <div className=''><FaXTwitter /></div>
    <div><FaInstagram /></div>
   <div> <CiLinkedin /></div>
   </div>
        </div>
        
    </div>
    </>

  )
}

export default Welcome