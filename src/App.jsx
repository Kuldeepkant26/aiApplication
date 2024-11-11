import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  )
}

export default App

//latest framework to build Ai powered tools or applications 