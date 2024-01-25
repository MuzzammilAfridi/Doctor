import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen w-screen sm:relative bottom-10 flex items-center justify-center '>
        <div className="min-h-[400px] p-8 rounded-2xl w-[280px] bg-cyan-200">
            <h2 className='text-center mb-5 text-3xl font-semibold'>Contact Form</h2>
            <form>
            <label className='text-lg' >Name: <input className='my-2 p-2 rounded-lg' type="text" placeholder='Enter your Name' /></label>
            <label className='text-lg' >Email: <input className='my-2 p-2 rounded-lg' type="email" placeholder='Enter your Email' /></label>
            <label className='text-lg' >Message: <input className='my-2 p-2 rounded-lg' type="text" placeholder='Enter some message' /></label>
            <button className='p-2 bg-green-700 w-full mt-3 rounded-lg text-white hover:bg-green-900'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact