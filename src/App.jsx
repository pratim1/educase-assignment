import { useState } from 'react'
import './App.css'
import Home from './Pages/Home.jsx'
import { BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Profile from './Pages/Profile.jsx'
import Register from './Pages/Register.jsx'


function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
