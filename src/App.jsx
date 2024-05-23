import React from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Services from './components/Services'
import Banner from './components/Banner'

const App = () => {
  return (
    <div className='bg-slate-900'>
      <Nav/>
      <Banner/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      
      <Footer/>
    </div>
  )
}

export default App