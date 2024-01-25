import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


const Nav = ({navItem}) => {
  return (
    <div className='h-[15vh] flex w-screen items-center justify-between  px-[4vw]'>
      <div className="">
        <h2 className='text-3xl font-bold text-[#16A34A]'>LOGO</h2>
        </div>
        <div className="">
        <ul className='hidden h-full sm:flex items-center pr-9  justify-end gap-10'>
          
          <li>
            <NavLink to="/" className={({isActive}) => `block py-2 font-semibold ${isActive ? "text-green-700" : "text-gray-700"} pr-4 pl-3 ${isActive ? "text-red-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
            >
              Home
            </NavLink>
          </li>
          <li>
          <NavLink to="/about" className={({isActive}) => `block font-semibold py-2 pr-4 pl-3 ${isActive ? "text-green-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
            >
              About
            </NavLink>
          </li>
          <li>
          <NavLink to="/contact" className={({isActive}) => `block font-semibold ${isActive ? "text-green-700" : "text-gray-700"} py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
            >
              Contact Us
            </NavLink>
          </li>
          
          
           
        </ul>
        <div >
        <IoIosMenu className=' block sm:hidden mr-10 font-semibold text-3xl' />
      
        </div>
        </div>
    </div>
  )
}

export default Nav