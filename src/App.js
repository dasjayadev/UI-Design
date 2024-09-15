import React from 'react';
import { BrowserRouter} from "react-router-dom"

import Footer from './components/Footer';
import SkillPlusNavbar from './components/SkillPlusNavbar';
import SuccessStorySection from './components/SuccessStorySection';
import TestimonialsCarousel from './components/TestimonialsCarousel';


function App() {
  return (
    <>
      <BrowserRouter>
        <SkillPlusNavbar/>
          <SuccessStorySection/>
          <TestimonialsCarousel/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
