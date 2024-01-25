import React from 'react'
import Boxes from './Boxes'


const About = () => {
  return (
 
      <div className="min-h-screen mt-12 sm:mt-0 flex items-center flex-col justify-center bg-cyan-100">
   
    <div className='h-2/3 w-screen flex items-center justify-center '>
<div className='h-1/2 w-1/2 text-center' >
    <h1 className='text-[35px] font-semibold mb-7 text-green-600'>Best and Experienced Faculties</h1>
    <p >We had bring the best experts of medical field to provide you the best service as
possible. We are tring our best to serve the world with our faculties,so that
everyone can have a proper medical facilities to avial</p>
</div>
</div>

<Boxes/>
      </div>
     


 
  )
}

export default About