import React, { Suspense, lazy } from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero';

// Lazy load heavy components
const About = lazy(() => import('./Sections/About'));
const Projects = lazy(() => import('./Sections/Projects'));
const Experiences = lazy(() => import('./Sections/Experiences'));
const Testimonial = lazy(() => import('./Sections/Testimonial'));
const Contact = lazy(() => import('./Sections/Contact'));
const Footer = lazy(() => import('./Sections/Footer'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
  </div>
);

export const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Projects/>
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Experiences/>
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonial/>
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact/>
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer/>
      </Suspense>
    </div>
  )
}
export default App;

