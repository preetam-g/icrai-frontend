import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import AboutUs from './pages/aboutUs/AboutUs'
import Contests from './pages/contests/Contests'
import CreateTeam from './pages/createTeam/CreateTeam'
import HackathonRegister from './pages/hackathonRegister/HackathonRegister'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Profile from './pages/profile/Profile'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/contests' element={<Contests/>} />
        <Route path='/contests/register' element={<HackathonRegister/>} />
        <Route path='/createTeam' element={<CreateTeam/>} />
      </Routes>
    </Router>
  )
}

export default App
