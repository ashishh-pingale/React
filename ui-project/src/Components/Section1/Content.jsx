import React from 'react'
import Rightcontent from './Rightcontent'
import Leftcontent from './Leftcontent'

const Content = (props) => {
  return (
    <div className=' w-full flex-1 gap-10 flex px-14 py-6'>
        <Leftcontent />
        <Rightcontent users = {props.users} tag = {props.tag} />

    </div>
  )
}

export default Content