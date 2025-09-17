import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './components/Home';
import { Personal_info } from './components/Personal_info';
import { About } from './components/About';
import { Skills } from './components/skills';
import { Pro } from './components/projects';
import { Education } from './components/Education';
import { Contect } from './components/Contect';
import { I } from './components/images';
import { Idj } from './components/dj';
import { Fstack } from './components/fstack';

function App() {
  return (
    <>
 <Router>
      <div className="app">
        {/* Navbar */}
        <header className="navbar">
          <div className="container">
            <h1 className="logo">My Portfolio</h1>
         </div>
        </header>

        {/* Main Routes */}
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Personal Info" element={<About/>} />
            <Route path="/About Me" element={<Personal_info/>} />
            <Route path="/Skills" element={<Skills/>} />
            <Route path="/Projects" element={<Pro/>} />
            <Route path="/Education" element={<Education/>} />
            <Route path="/Contact" element={<Contect/>} />
            <Route path="/images_react" element={<I/>} />            
            <Route path="/images_dj" element={<Idj/>} />            
            <Route path="/images_fs" element={<Fstack/>} />            
          </Routes>
        </main>
      </div>
    </Router>
    </>
  )
}

export default App
