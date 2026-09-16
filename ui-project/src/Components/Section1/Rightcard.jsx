import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
          <div className=' h-full w-73 relative rounded-4xl overflow-hidden'>
        <img className='w-full h-full object-cover' src={props.img} alt="img" />

        <Rightcardcontent id = {props.id} color = {props.color} tag = {props.tag}/>



      </div>
  )
}

export default Rightcard