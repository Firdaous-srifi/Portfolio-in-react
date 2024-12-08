import React from 'react'
import 'aos/dist/aos.css';

const About = () => {
  return (
    <div>
        <div href="about" className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
            <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'> 
            <img  alt="" width={290} height={290} className='rounded border-2 p-1 border-fuchsia-500 img-glow' src='src/assets/aboutme.jpeg'/>

            <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase aos-init aos-animate'>About Me </h1> 
            <p> I thrive on crafting beautiful and intuitive user experiences. My passion lies in transforming designs into pixel-perfect, responsive websites and applications. With a keen eye for detail and a commitment to clean, modular code, I specialize in bringing digital products to life. From HTML, CSS, and JavaScript to modern frameworks, I stay up-to-date with the latest trends and best practices to deliver cutting-edge solutions.</p>
            <div className='flex mt-8 gap-2'>
              <div className='flex items-center justify-center'>
                <div className='flex space-x-2'>
                  <a href="src/assets/CV-firdaous srifi.png" target="_blank" rel="noopener noreferrer"><button className='none-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden'>Resume</button></a>
                </div>
              </div>
            </div>
            </div>
            
        </div>
    </div>  
  )
}

export default About