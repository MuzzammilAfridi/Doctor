import React from 'react'

const Boxes = () => {
  return (
    <div className='h-fit mt-10 flex flex-wrap gap-5 justify-center items-center w-screen '>
      <div className="h-[100px] w-fit bg-white rounded-xl text-center flex flex-col items-center justify-center px-9 text-black">
       <h2 className=' text-2xl font-semibold'><span className='text-green-600 '>20+ <br /></span> Doctors</h2>
      
      </div>
      <div className="h-[100px] w-fit bg-white rounded-xl text-center flex flex-col items-center justify-center px-9 text-black">
        <h2 className='text-2xl font-semibold'><span className='text-green-600'>50,000+ <br /></span>Customer</h2>
      </div>
      <div className="h-[100px] w-fit bg-white rounded-xl text-center flex flex-col items-center justify-center px-9 text-black">
        <h2 className='text-2xl font-semibold'><span className='text-green-600'>500+ <br />
</span>Student</h2>
      </div>

    </div>
  )
}

export default Boxes