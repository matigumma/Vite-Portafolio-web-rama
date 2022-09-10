import { useState, useEffect } from 'react'
import Navbar from "./nav-bar";
import Footer from './Footer';
import Navbar_responsive from './Nav-bar-respondive';



function Home() {
return(
    <>
    
    <div className='background-home'>
    <Navbar_responsive className="sm:hidden "/>
        <Navbar />
        
            <div className=' text-left text-white p-64 pl-20 '>
                <h1 className='text-6xl  pb-20 franklin font-bold'>Welcome,<br />I'm <span className='text-infor'>Ramiro Gumma</span> </h1>
                <h2 className='text-2xl inconsolota'>I'm a <span className='text-infor'>Front-End Developer</span> - Based in Buenos Aires</h2>
        
            </div>
     </div>
            {/* FOOTER */}
             
        <Footer />
    </>
)}

export default Home;
