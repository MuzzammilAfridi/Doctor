import { useState } from 'react'

import './App.css'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import About from './Components/About'
import Contact from './Components/Contact'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const navItem = ["Home", "About Us", "Our Service", "Contact Us"]

  return (
    <div className='overflow-x-hidden'>
     <Nav navItem = {navItem}/>
     {/* <Hero/> */}
     {/* <About/> */}
     <Outlet/>
   
    </div>
  )
}

export default App
