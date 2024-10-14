import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import PhotoInfoLayout from './components/PhotoInfoLayout'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from './components/Carousel';
import { CarouselDefault } from './components/CarouselDefault';
import { FooterComponent } from './components/FooterComponent';
import Footer from './components/Footer';
import Cards1 from './components/Cards1';


const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Cards/>
      <PhotoInfoLayout/>
      {/* <Carousel/> */}
      <CarouselDefault/>
      {/* <FooterComponent/> */}
      <Footer/>
    </div>
  )
}

export default App
