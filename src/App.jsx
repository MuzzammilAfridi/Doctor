import { useState } from 'react'

import './App.css'
import Nav from './Components/Nav'
import Hero from './Components/Hero'

function App() {
  const [count, setCount] = useState(0)
  const navItem = ["Home", "About Us", "Our Service", "Contact Us"]

  return (
    <>
     <Nav navItem = {navItem}/>
     <Hero/>
    </>
  )
}

export default App
