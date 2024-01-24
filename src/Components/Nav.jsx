import React from 'react'

const Nav = ({navItem}) => {
  return (
    <div className='h-[15vh] px-5'>
        <ul className='h-full flex items-center  justify-end gap-10'>
          
              <li><a className='text-xl hover:text-red-700 text-[#16A34A] font-semibold '  href="#">Home</a></li>
              <li><a className='text-xl hover:text-red-700 hover:font-semibold '  href="#">Services</a></li>
              <li><a className='text-xl hover:text-red-700 '  href="#">About us</a></li>
              <li><a className='text-xl hover:text-red-700 '  href="http://localhost:5173/">Contact us</a></li>
      
          
           
        </ul>
    </div>
  )
}

export default Nav