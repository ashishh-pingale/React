import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Herotext from './Herotext'
import Arrow from './Arrow'

const Leftcontent = () => {
  return (
    <div className='h-full px-4 py-6 flex flex-col justify-between w-1/4 '>
        <Herotext />
        <Arrow />
        </div>
  )
}

export default Leftcontent