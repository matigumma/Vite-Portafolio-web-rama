import { useState, useEffect } from 'react'
import Navbar from "./nav-bar";
import { Link } from "react-router-dom";


function Home() {
return(
    <>
    <Navbar />
    
        <div className='bg-gray-400 m-5 text-left p-20 border border-dark'>
            <h1 className='text-5xl p-10 vt323 glitch'>Hello my name is Ramiro Gumma</h1>
            <h2 className='text-4xl p-10 ml-32 vt323'>Frontend Developer</h2>
    
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

    </>
)}

export default Home;
