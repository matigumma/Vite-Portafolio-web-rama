import { useState, useEffect } from 'react'
import Footer from './Footer';
import Navbar_responsive from './Nav-bar-responsive';
import { motion } from "framer-motion"
import { Cursor ,useTypewriter } from 'react-simple-typewriter'
import Carousel from './Carousel';

function Home() {
    const  [ text ,  count ]  =  useTypewriter ( { 
        words: [
            "Welcome",
            "Bienvenido",
            "欢迎",
            "Welkom",
            "Bienvenue",
            "Benvenuto",
            "ようこそ",
        ],
        loop: true,
        defaultSpeed: 2000, 
        deleteSpeed: 150,
      } ) 
    
return(
    <>
        <Navbar_responsive />  
        <section className='background-home z-0'>
    <motion.div
    initial={{
        y: -100,
        opacity: 0
    }}
    transition={{ duration: 1.2 }}
    whileInView={{
        opacity: 1,
        y: 0
 }}
    viewport={{ once: true }}>
                <div className='lg:ml-20 ml-10 text-white pt-60 lg:pt-96'>                 
                <h2 className='text-4xl italic font-bold lg:text-6xl z-1 franklin'>
                   <span>{text}</span>
                   <Cursor cursorColor='#57F27E' cursorStyle='/>'/>
                    </h2>   

                <h2 className='pb-20 text-3xl font-bold lg:text-6xl franklin'> 
                I'm <span className='text-infor'>Front-End Developer</span></h2>

                <h2 className='pb-72 lg:text-xl text-md inconsolota'>I'm a <span className='text-infor'>Ramiro Gumma</span> - Based in Buenos Aires</h2>
            </div>
     </motion.div>
        </section>
        <div className=" background-home z-9">
                <motion.h2 
                initial={{x:-200, opacity:0}}
                animate={{x:0, opacity: 1}}
                transition={{delay: 1, duration:.5,}}
                viewport={{ once: true }}
                  className="pl-20 text-white  lg:text-3xl text-xl franklin">Encontrame en <span className="text-4xl text-infor">:</span>
                  </motion.h2>
            </div>
        <Carousel />
        
        <Footer />
     
    </>
)}

export default Home;
