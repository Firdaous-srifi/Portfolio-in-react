import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  return (
    <div className='p-4 lg:p-20 flex flex-col items-center justify-center'>
      <h1 data-aos="fade-left" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500 aos-init aos-animate'>
        Contact Me
      </h1>
      <form action="" className='flex flex-col gap-2 lg:w-1/2'>
        <div className='lg:flex gap-9'>
          <input type="text" placeholder='Enter Your Name' className='w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 bg-glow text-xl text-slate-500'/>
          <input type="text" placeholder='Enter Your Email' className='w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 bg-glow text-xl text-slate-500'/>
        </div>
        <textarea name="" id="" placeholder='Write Your Message' className='w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500'></textarea>
        <button type='submit' className='neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:text-fuchsia-500 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b-glow text-xl text-bold'>Submit</button>
      </form>
    </div>
  )
}

export default Contact