import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 px-16'>
        <h4 className='bg-black rounded-full text-white px-3 py-1 uppercase text-xs tracking-widest'>Target Audience</h4>
        <button className='bg-gray-200 rounded-full text-black px-3 py-1 uppercase text-xs tracking-widest'>Digital banking Platform</button>
    </div>
  )
}

export default Navbar