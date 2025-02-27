import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { LiaLinkedin } from 'react-icons/lia'
import { MdEmail } from 'react-icons/md'
import { FaStackOverflow } from 'react-icons/fa6'
import AOS from 'aos'
import 'aos/dist/aos.css' 


const Banner = () => {
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 750

    })
  return (
    <div>
        <div className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-3 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
            <div className='h-full lg:py-20 flex flex-col justify-center lg:items-start items-center text-white'> 
            <img src='src/assets/photo-portfolio.jpeg' alt="" width={290} height={290} className='rounded-full border-2 p-1 border-fuchsia-500 img-glow'/>
            <h1 className='text-[52px] font-semibold mb-8 leading-normal'>Welcome To<span className='text-fuchsia-500'> My website</span></h1>
            <p>Welcome to my online portfolio! Here you'll find a curated collection of my best work, showcasing my skills and expertise across various projects. Take a look around, get to know me, and feel free to reach out with any questions or opportunities. I'm excited to share my passion with you.</p> 
            <div className='flex mt-8 gap-2'> 
                <div className='flex items-center justify-center'>
                    <div className='flex space-x-2'>
                        <a href="https://github.com/Firdaous-srifi" target="_blank" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                            <AiFillGithub className='text-[28px]'></AiFillGithub>
                        </a>
                        <a href="https://www.linkedin.com/in/srifi-f-773136230/" target="_blank" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                            <LiaLinkedin className='text-[28px]'></LiaLinkedin>
                        </a>
                        <a href="" target="_blank" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                            <MdEmail className='text-[28px]'></MdEmail>
                        </a>
                        <a href="https://stackoverflow.com/users/21474063/firdaous-srifi" target="_blank" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                            <FaStackOverflow className='text-[28px]'></FaStackOverflow>
                        </a>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Banner