import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { UserContext } from './context/context'

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((count) => count + 1)
  }
  return (
    <>
      <UserContext.Provider value={{ count, setCount }}>
        <Navbar />
        <button onClick={handleClick}>Count is {count}</button>
      </UserContext.Provider>
    </>
  )
}

export default App
