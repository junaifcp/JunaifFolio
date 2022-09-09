import React from 'react';
import {About,Footer,Work,Skills,Testimonial,Header} from './container';
import { Navbar } from './components';
import './App.scss'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App