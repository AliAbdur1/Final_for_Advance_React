import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import MyWork from './MyWork'

function Navigation() {
  return (
    <div>
        <nav className="main-nav">
          <div className="social_links" style={{float: "left"}}>
            <a href="https://www.facebook.com/" target="_blank" alt="facebook icon">
              <img src="/facebook-icon-eps-10.png" alt="facebook icon" width={25}/>
            </a>
        
            <a href="https://www.instagram.com/frumpybumples/" target="_blank" alt="instagram icon">
              <img src="/instagram-6338392_1280.webp" alt="instagram icon" width={25}/>
            </a>
        
            <a href="https://www.linkedin.com/in/ali-abdur-razzaq-a37404284/" target="_blank" alt="linkedin icon">
              <img src="/linkedin-icon-2048x2048-ya5g47j2.png" target="_blank" alt="linkedin icon" width={25}/>
            </a>

            <a href="https://github.com/AliAbdur1" target="_blank" alt="github link">
              <img src="/github logo.png" target="_blank" alt="github icon" width={25}/>
            </a>

          </div>
            <Link to="/" style={{float: "left", marginLeft: "70px"}}>Home</Link>
            <Link to="/about" style={{float: "left", marginLeft: "30px"}}>About</Link>
            <Link to="/contact" style={{float: "right", marginRight: "70px"}}>Contact</Link>
            <Link to="/my_work" style={{float: "right", marginRight: "50px"}}>My Work</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/my_work" element={<MyWork/>}/>
        </Routes>
      
    </div>
  )
}

export default Navigation
