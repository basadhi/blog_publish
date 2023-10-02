import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Gallery from './pages/Gallery/Gallery'
import Explore from './pages/Explore/Explore'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './pages/Contact/Contact'
import Notfound from './pages/NotFound/Notfound'
import React from 'react';


const App = () => {
  return (
    <BrowserRouter>

    <Navbar/>
      <Routes>
      <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='explore' element={<Explore/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<Notfound/>}/>
        
      </Routes>
      
      
      
      <Footer/>
    
    
    </BrowserRouter>
    
  )
}

export default App