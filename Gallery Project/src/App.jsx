import React, { useEffect, useState } from 'react'
import axios from "axios";

const App = () => {
  const [userdata, setUserdata] = useState([])
  const [index, setIndex] = useState(1)

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserdata(response.data)
    console.log(response.data)

  }

  useEffect(function () {
    getdata()
  },[index])
  let printUserdata = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if (userdata.length > 0) {
    printUserdata = userdata.map(function (elem, idx) {
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 overflow-hidden rounded-2xl bg-white'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h2>{elem.author}</h2>
        </a>
      </div>
    })
  }
  return (
    
    <div className='bg-black h-screen text-white p-4 overflow-auto'>

      <div className='flex flex-wrap gap-5 justify-center'>
        {printUserdata}
      </div>
    <div className='flex mt-5 gap-4 items-center justify-center'>
      <button onClick={()=>{
        setUserdata([])
        if (index>1) {
          setIndex(index-1)
        }
      }}
      className='bg-amber-500 px-4 py-2 cursor-pointer text-black font-semibold rounded' >Prev</button>

      <h3>page {index}</h3>

      <button onClick={()=>{
        setUserdata([])
        setIndex(index+1)
      }} 
      className='bg-amber-500 px-4 py-2 cursor-pointer text-black font-semibold rounded' >Next</button>
    </div>
    </div> 


    
  )
}

export default App