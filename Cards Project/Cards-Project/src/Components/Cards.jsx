import React from 'react'
import {Bookmark} from 'lucide-react'

const Cards = (props) => {
  return (
    <div className='parent'>
        <div className="Cards">
          <div className="top">
            <img src={props.brandLogo} alt="logo" />
            <button>save <Bookmark size={12} /></button>
          </div>
          <div className="main">
            <div className='hero'>
            <p>{props.companyName}</p><span>{props.datePosted}</span>
            </div>
            <p>{props.post}</p>
            
            <div className='adds'>
              <p>{props.tag1}</p>
              <p>{props.tag2}</p>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <p>{props.pay}</p>
              <span>{props.location}</span>
            </div>
            <div className="right">
              <button>Apply Now</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cards