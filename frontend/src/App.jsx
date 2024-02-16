import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import "./App.css"
import ExploreDiv from './components/ExploreDiv'
import AllCard from './pages/AllCard'

function App() {
  return (
    <div className=' bg-yellow-50'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allCard' element={<AllCard/>}/>
        
      </Routes>
    </div>
  )
}

export default App
