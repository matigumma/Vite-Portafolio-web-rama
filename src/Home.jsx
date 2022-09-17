import { useState, useEffect } from 'react'
import Footer from './Footer';
import Navbar_responsive from './Nav-bar-responsive';
import { motion } from "framer-motion"



   


function Home() {
    
return(
    <>
    
    <motion.div
         initial={{
            opacity: 0,
         }}
         animate={{
            opacity: 1,
         }}
    className='background-home'>
    <Navbar_responsive />
    
        
            <div className='w-11/12 p-5 ml-10 text-white pt-72'>     
                <h1 className='pb-20 text-4xl font-bold lg:text-8xl franklin'> 
                <motion.p
                initial={{
                    translateX: -200,
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{
                    duration: .6,
                    ease: 'easeInOut',
                }}
                className='italic'>Welcome
                 </motion.p> 
                 I'm <span className='text-infor'>Ramiro Gumma</span> </h1>
                <h2 className='pb-48 lg:text-2xl text-md inconsolota'>I'm a <span className='text-infor'>Front-End Developer</span> - Based in Buenos Aires</h2>
            </div>
     </motion.div>
    <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     viewport={{ once: true }}
    >         
        <Footer />
    </motion.div>  
    </>
)}

export default Home;
