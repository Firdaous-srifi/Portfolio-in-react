import React from 'react'

const Projects = () => {
  return (
    <div className='p-20 flex flex-col items-center justify-center'> 
      <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500 aos-init aos-animate'>Projects</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-10'>
        <img src="src/assets/projects/project1.png" alt="" data-aos="fade-up" height="250" width="250" className='flex items-center justify-center rounded-3xl'/>
        <img src="src/assets/projects/project2.png" alt="" data-aos="fade-up" height="250" width="250" className='flex items-center justify-center rounded-3xl'/>
        <img src="src/assets/projects/project3.png" alt="" data-aos="fade-up" height="250" width="250" className='flex items-center justify-center rounded-3xl'/>
        <img src="src/assets/projects/project5.png" alt="" data-aos="fade-up" height="250" width="250" className='flex items-center justify-center rounded-3xl'/>
        <img src="src/assets/projects/project6.png" alt="" data-aos="fade-up" height="250" width="250" className='flex items-center justify-center rounded-3xl'/>
        <img src="src/assets/projects/projet7.png" alt="" data-aos="fade-up" height="250" width="250" className='flex items-center justify-center rounded-3xl'/>
        <img src="src/assets/projects/project8.png" alt="" data-aos="fade-up" height="250" width="250" className='flex items-center justify-center rounded-3xl'/>
        <img src="src/assets/projects/project4.png" alt="" data-aos="fade-up" height="250" width="250" className='flex items-center justify-center rounded-3xl'/>

        <img src="src/assets/projects/project9.png" alt="" data-aos="fade-up" height="250" width="250" className='flex items-center justify-center rounded-3xl'/>
      </div>
    </div>
  )
}

export default Projects