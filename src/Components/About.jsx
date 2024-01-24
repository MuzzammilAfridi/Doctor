import React from 'react'
import Boxes from './Boxes'


const About = () => {
  return (
 
      <div className="min-h-screen bg-cyan-100">
      <div className='h-[15vh] px-5 my-9'>
        <ul className='h-full flex items-center  justify-end gap-10'>
          
              <li><a className='text-xl hover:text-red-700 text-[#16A34A] font-semibold '  href="#">Home</a></li>
              <li><a className='text-xl hover:text-red-700 '  href="#">Services</a></li>
              <li><a className='text-xl hover:text-red-700 '  href="#">About us</a></li>
              <li><a className='text-xl hover:text-red-700 '  href="http://localhost:5173/">Contact us</a></li>
      
          
           
        </ul>
    </div>
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