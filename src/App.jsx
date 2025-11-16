import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Experiences from './Sections/Experiences';
import Testimonial from './Sections/Testimonial';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';

export const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Experiences/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App;

