import React from 'react'

const Hero = () => {
  return (
    <div className='w-screen h-[75vh] flex'>
        <div className='h-full w-1/2 flex flex-col  items-center justify-center gap-9'>
            <h1 className='text-6xl font-semibold '>Complete health <br /> Care Solution for <br /> Everyone</h1>
            <p className='w-[90%] '>We're always available for out Patient with emergen Problems. You can easily reach us 24/7.We focused on Highest Quality</p>
            <button className='p-4 bg-green-600   text-white font-semibold rounded-2xl'>Make a Appointment</button>
        </div>
        <div className='h-full w-1/2 flex mt-2 items-center justify-center  '>
         <img className='h-[90%] absolute z-10' src="/src/assets/doctor.png" />
         <img className='  h-[60%] absolute mt-14 ml-5 z-[2]' src="/src/assets/greenBox.png" />
         <img className=' absolute h-[74%] mt-5 ml-5' src="/src/assets/yellowBox.png" />
        </div>
    </div>
  )
}

export default Hero