import React from 'react'

const Nav = ({navItem}) => {
  return (
    <div className='h-[15vh] px-5 bg-cyan-900'>
        <ul className='h-full flex items-center justify-end gap-10'>
          {navItem.map((item)=>(
              <li><a className='text-xl font-semibold' href="#">{item}</a></li>
          ))}
          
           
        </ul>
    </div>
  )
}

export default Nav