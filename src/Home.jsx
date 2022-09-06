import { useState, useEffect } from 'react'
import Navbar from "./nav-bar";
import { Link } from "react-router-dom";


function Home() {
return(
    <>
    <div className='background-home'>
        <Navbar />
        
            <div className=' text-left text-white  p-60 pl-20 '>
                <h1 className='text-6xl  pb-20 franklin font-bold'>Welcome,<br />I'm <span className='text-info'>Ramiro Gumma</span> </h1>
                <h2 className='text-2xl inconsolota'>I'm a <span className='text-info'>Front-End Developer</span> - Based in Buenos Aires</h2>
        
            </div>

            {/* FOOTER */}
            <footer>
                <div className='grid grid-cols-2 gap-5 justify-items-center bg-primary border-2 border-dark'>
                    <div className='mt-5 p-5'>
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
                    <div className='mt-5 p-5'>
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
                    <p>©Copyrigth Ramiro Gumma</p>
                </div>
            </footer>
    </div>
    </>
)}

export default Home;
