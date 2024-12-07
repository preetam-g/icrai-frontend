import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import Contests from './pages/contests/Contests';
import CreateTeam from './pages/createTeam/CreateTeam';
import HackathonRegister from './pages/hackathonRegister/HackathonRegister';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import Navbar from './components/navbar/Navbar';

function App() {

  const [selectedOption,setSelected] = useState(-1);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })
  return (
    <Router>
      <Navbar selectedOption={selectedOption} setSelected={setSelected}></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/contests' element={<Contests windowWidth={windowWidth}/>} />
        <Route path='/contests/register' element={<HackathonRegister/>} />
        <Route path='/createTeam' element={<CreateTeam/>} />
      </Routes>
    </Router>
  )
}

export default App
