import React from 'react'

const Rightcardcontent = (props) => {
    
  return (
            <div className=' bg-gray-950/22 absolute top-0 flex flex-col left-0 h-full w-full p-6 justify-between'>
          <h2 className='bg-white rounded-full flex justify-center items-center h-8 w-8 '>{props.id+1}</h2>

          <div>
            <p className=' text-shadow-2xl mb-5 leading-normal text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, quae. Eaque veritatis rerum vitae alias.</p>

            <div className='flex justify-between'>
              <button style={{backgroundColor:props.color}} className='text-white font-medium  px-6 py-2 rounded-full'>{props.tag}</button>
              <button style={{backgroundColor:props.color}} className='text-white px-3 py-2 rounded-full' ><i className="ri-arrow-right-line"></i></button>
            </div>
          </div>

        </div>
  )
}

export default Rightcardcontent