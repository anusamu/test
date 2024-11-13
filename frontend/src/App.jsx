import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

function App() {


  return (
  <Routes>
<Route path='/' element={<Login/>}></Route>
<Route path='/home' element={<Home/>}></Route>
  </Routes>
 
  )
}

export default App
