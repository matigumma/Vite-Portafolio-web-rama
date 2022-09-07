import { useState, useEffect } from 'react'
import Navbar from "./nav-bar";
import { Link } from "react-router-dom";



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
            <footer>
                <div className='grid grid-cols-2 gap-5 justify-items-center bg-gradient-to-t from-dark to-obscure pt-72 '>
                    <div className=''>
                        <ul>
                            <label className='text-lg m-5'> <span className='text-dark'>|</span> Secciones </label>
                            <hr />
                            <li className='p-5 m-3 hover:underline hover:decoration-1 hover:underline-offset-4'>
                                <Link to="contactme">Contact Me</Link>
                            </li>
                            <li className='p-5 m-3 hover:underline hover:decoration-1 hover:underline-offset-4'>
                                <Link to="aboutme">About Me</Link>
                            </li>
                            <li className='p-5 m-3 hover:underline hover:decoration-1 hover:underline-offset-4'>
                                <Link to="briefcase">Briefcase <span className='text-2xl text-info'>|</span> Portafolio</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='pb-10'>
                    <ul>
                        <label className='text-lg m-5'> <span className='text-dark'>|</span> Redes Personales </label>
                        <hr />
                            <li className='p-5 m-3 hover:underline hover:decoration-1 hover:underline-offset-4'>
                                <a href="https://github.com/Hamipluf" target="BLANK">GitHub</a>
                            </li>
                            <li className='p-5 m-3 hover:underline hover:decoration-1 hover:underline-offset-4'>
                                <a href="linkedin.com/in/ramiro-gabriel-gumma-400993240" target="BLANK">Linkedin</a>
                            </li>
                            <li className='p-5 m-3 hover:underline hover:decoration-1 hover:underline-offset-4'>
                                <a href="https://www.instagram.com/ramaa_gmm/" target="BLANK">Instagram</a>
                            </li>
                        </ul>

                    </div>
                </div>

                <div className='bg-dark text-white text-center p-5'>
                    <p>©Copyrigth Ramiro Gumma <span className='text-info'>|</span> Designed by Josefina Ritter</p>
                </div>
            </footer>
    
    </>
)}

export default Home;
