import { useState, useEffect } from 'react'
import Footer from './Footer';
import Navbar_responsive from './Nav-bar-responsive';



function Home() {
return(
    <>
    
    <div className='background-home'>
    <Navbar_responsive />
    
        
            <div className='w-11/12 p-5 pt-48 m-auto text-left text-white'>
                <h1 className='pb-20 text-4xl font-bold franklin'>Welcome,<br />I'm <span className='text-infor'>Ramiro Gumma</span> </h1>
                <h2 className='pb-48 text-md inconsolota'>I'm a <span className='text-infor'>Front-End Developer</span> - Based in Buenos Aires</h2>
        
            </div>
     </div>
                         
        <Footer />
    </>
)}

export default Home;
