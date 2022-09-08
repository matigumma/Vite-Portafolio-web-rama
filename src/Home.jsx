import { useState, useEffect } from 'react'
import Navbar from "./nav-bar";
import { Link } from "react-router-dom";
import logo from './img/logo.png'


function Home() {
return(
    <>
    <div className='background-home'>
        <Navbar />
        
            <div className=' text-left text-white p-64 pl-20 '>
                <h1 className='text-6xl  pb-20 franklin font-bold'>Welcome,<br />I'm <span className='text-infor'>Ramiro Gumma</span> </h1>
                <h2 className='text-2xl inconsolota'>I'm a <span className='text-infor'>Front-End Developer</span> - Based in Buenos Aires</h2>
        
            </div>
     </div>
            {/* FOOTER */}
            <footer className="footer bg-gradient-to-b from-obscure to-primary p-10 text-base-content">
                <div>
                    <img src={logo} className="h-20 w-16"/>                    
                    <p>Copyright © 2022 - All right reserved by Ramiro GUmma <span className='text-primary'>|</span>Designed by Josefina Ritter</p>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <Link className='links' to="abaoutme"> About me</Link> 
                    <Link className='links' to="/">Home</Link>
                    <Link className='links' to="/contactme">Contact Me</Link>
                    <Link className='links' to="/briefcase">Briefcase</Link>
                </div> 
                <div>
                    <span className="footer-title">Social</span> 
                    <a href='https://www.linkedin.com/in/ramiro-gabriel-gumma-400993240/' target="BLANK"className="links">Linkedin</a> 
                    <a href='https://github.com/Hamipluf' target="BLANK"className="links">Github</a> 
                    <a href='https://www.workana.com/freelancer/b85e703950de6afa717ace9a8327c73a' target="BLANK"className="links">Workana</a>
                </div>
</footer>
    
    </>
)}

export default Home;
