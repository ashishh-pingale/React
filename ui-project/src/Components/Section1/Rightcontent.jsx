import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div className='h-full flex overflow-x-auto flex-nowrap gap-10 p-6 w-3/4'>
        {props.users.map(function(elem,idx){
          return <Rightcard key = {idx} id = {idx} color = {elem.color} img = {elem.img} tag = {elem.tag} />
        })}
    </div>
  )
}

export default Rightcontent