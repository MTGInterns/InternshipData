//import React from "react";
import {Route, Routes } from 'react-router';
import Tour from './components/Tours';
import About from './About';
import Booking from './Booking';
import ContactUs from './ContactUs';
import Header from './Header';
import Footer from './footer';
import Category from './components/Category';
import Subcategory from './components/Subcategory';
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Category/>}/>
        <Route path='/category/:id' element={<Subcategory/>}/>
        <Route path='/tour' element={<Tour/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/booking/id' element={<Booking/>}/>
        <Route path='/contact' element={<ContactUs/>}/>    
      </Routes> 
      <Footer/>
    </>
  )
}
export default App;
