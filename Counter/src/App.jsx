import React, { useState } from 'react'

const App = () => {
  const[num , setNum] = useState(0)

  function increment() {
    setNum(num + 1)
  }
  function decrement() {
    setNum(num - 1)
  }
  function incrementby5() {
    setNum(num + 5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increment} >Increment</button>
      <button onClick={decrement} >Decrement</button>
      <button onClick={incrementby5} >Increment by 5</button>
    </div>
  )
}

export default App