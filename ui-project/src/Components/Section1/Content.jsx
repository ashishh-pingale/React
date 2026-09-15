import React from 'react'
import Rightcontent from './Rightcontent'
import Leftcontent from './Leftcontent'

const Content = () => {
  return (
    <div className='bg-red-400 w-full flex-1 gap-10 flex px-14 py-6'>
        <Leftcontent />
        <Rightcontent />

    </div>
  )
}

export default Content