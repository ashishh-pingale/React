import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { Link, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <div className='bg-blue-500 flex justify-between px-10 py-3 navbar'>
        <h2 className='font-semibold'>Ash</h2>
        <div className='flex gap-5'>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>


        </div>
      </div>

      <div className='bg-black h-screen text-white'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App