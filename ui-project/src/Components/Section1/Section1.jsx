import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

const Section1 = (props) => {
  
  return (
    <div className='bg-white h-screen w-full flex flex-col'>
      <Navbar />
      <Content users = {props.users} />
    </div>
  )
}

export default Section1