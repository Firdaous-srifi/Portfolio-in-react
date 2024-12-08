import React from 'react'

const Services = () => {
  return (
    <div className='p-20 flex flex-col items-center justify-center'>
      <h2 data-aos="fade-right" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500 aos-init aos-animate'>Services</h2> 
      <div className='grid lg:grid-cols-4 md:grid-cols-1 justify-around gap-20'>
        <h2 data-aos="fade-up" className='text-[26px] flex items-center justify-center font-semibold text-red-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow aos-init aos-animate'>HTML5</h2>
        <h2  data-aos="fade-up" className='text-[26px] flex items-center justify-center font-semibold text-blue-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow aos-init aos-animate'>CSS3</h2>
        <h2  data-aos="fade-up" className='text-[26px] flex items-center justify-center font-semibold text-yellow-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow aos-init aos-animate'>Javascript</h2>
        <h2  data-aos="fade-up" className='text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow aos-init aos-animate'>Figma</h2>
      </div>
    </div>
   
  )
}

export default Services