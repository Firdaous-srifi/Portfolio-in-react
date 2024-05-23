import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white lg:px-48 px-4 py-20'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='mb-4 md:mb-0'>
          <span className='text-3xl font-semibold text-fuchsia-800 py-2 uppercase'>LOGO</span>
          <p className='text-[18px] my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos earum vitae provident? Alias ipsum distinctio illum incidunt dignissimos. Vitae ea incidunt et vel similique esse repudiandae optio nihil veritatis aut!</p>
        </div>        
      
      <div> 
        <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>SERVICES</h2>
        <ul className='text-[16px] my-4'>
          <li className='my-2'>Web design</li>
          <li className='my-2'>Web Development</li>
          <li className='my-2'>SEO</li>
          <li className='my-2'>E-coomerce</li>
        </ul>
      </div>
      <div className='mb-4 md:mb-0'>
        <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>CONTACT</h2>
        <p className='text-[16px] my-4'>Email:<br></br>srififirdaous@gmail.com</p>
        <p className='text-[16px] my-4'>Phone: 0608497260</p>
      </div>
      <div>
        <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>FOLLOW ME</h2>
        <div className='flex space-x-4'>
          <a href="" className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
          <AiFillGithub className='text-[28px]'></AiFillGithub>
          </a>
          <a href="" className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
          <LiaLinkedin className='text-[28px]'></LiaLinkedin>
          </a>
          <a href="" className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
          <MdEmail className='text-[28px]'></MdEmail>
          </a>
          <a href="" className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
          <FaTwitter className='text-[28px]'></FaTwitter>
          </a>
        </div> 
      </div>
      </div>
    </footer>
  )
}

export default Footer