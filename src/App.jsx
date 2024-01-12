import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl text-red-700 font-semibold text-center py-5'>Hi Everyone</h1>
    </>
  )
}

export default App
