import css from './img/css-3.png'
import js from './img/js.png'
import html from './img/html5.png'
import react from './img/react.png'
import github from './img/github.png'
import git from './img/git.png'
import tailwind from './img/Tailwind.png'
// import devops from './img/DevOps News 1.png'
// import appproduct from './img/appproduct.png'
import Navbar_responsive from './Nav-bar-responsive'
import Footer from './Footer'
import { motion } from "framer-motion"



function Briefcase() {

    return (
        <>
        <Navbar_responsive />
        <section className='bg-gradient-to-b from-obscure to-dark'>
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
            
                {/*SLILLS*/}
              
                <div className="pt-32 pl-10">              
                        <h2 className='text-4xl font-extrabold lg:text-6xl franklin text-infor'> <span className='text-2xl text text-ligth'>//</span> Skills</h2>
                </div>

                <div className='w-11/12 pt-16 m-auto text-justify'>
                    <p className='text-xs font-medium leading-relaxed text-white lg:text-xl franklin'>Lenguajes de front-end con los que trabajo.</p>
                </div>                   
                        
                 <div className="grid grid-cols-2 gap-5 pt-10 gap-y-10 justify-items-center">
                      <div><img className="w-16 h-16 duration-75 lg:w-28 lg:h-28 active:scale-125 lg:hover:scale-125" src={css} alt="" />
                      </div>
                      <div><img className="w-16 h-16 duration-75 lg:w-28 lg:h-28 active:scale-125 lg:hover:scale-125" src={js} alt="" />
                      </div>
                      <div><img className="w-16 h-16 duration-75 lg:w-28 lg:h-28 active:scale-125 lg:hover:scale-125" src={html} alt="" />
                      </div>
                      <div><img className="w-16 h-16 duration-75 lg:w-28 lg:h-28 active:scale-125 lg:hover:scale-125" src={react} alt="" />
                      </div> 
                 </div>      

                  {/*TOOLS*/}
                   
                        <div className="pl-10 font-extrabold pt-44">              
                                <h2 className='text-4xl lg:text-6xl franklin text-infor'> <span className='text-2xl text text-ligth'>//</span> Tools</h2>
                        </div>

                        <div className='w-11/12 pt-16 m-auto text-justify'>
                            <div><p className='text-xs font-medium text-white lg:text-xl franklin'>Tecnologias de desarrollo </p></div>
                        </div>
                        
                        <div className="grid grid-cols-3 p-5 pt-10 lg:pb-20 justify-items-center">
                                        <div><img className="w-16 h-16 duration-75 lg:w-24 lg:h-24 active:scale-125 lg:hover:scale-125" src={github} alt="" />
                                        </div>
                                        <div><img className="w-16 h-16 duration-75 lg:w-24 lg:h-24 active:scale-125 lg:hover:scale-125" src={git} alt="" />
                                            </div>
                                        <div className=''><img className="w-16 h-16 duration-75 lg:w-24 lg:h-24 active:scale-125 lg:hover:scale-125" src={tailwind} alt="" />
                                            </div>
                                    </div>

                       
                       
        </motion.div>   
        </section>            
        <Footer />
 
                    
                
        {/* PROYECTOS */}

           {/* <div className=''><h2 className='w-11/12 m-auto text-xl text-center text-white rounded-lg '>Proyectos <span className='text-secondary'>| Experience</span></h2></div>  */}
            {/* <div className= 'grid grid-cols-2 gap-5 pt-5 '> */}
                 {/* DevOps News */}
                {/* <div>
                    <img className='w-4/5 m-auto duration-75 border-2 border-solid cursor-pointer border-ligth hover:scale-105' src={devops} alt="" />
                </div> */}
                {/* App Product */}
                {/* <div>
                    <img className='w-4/5 m-auto duration-75 border-2 border-solid cursor-pointer border-ligth hover:scale-105' src={appproduct} alt="" />
                </div> */}

            {/* </div> */}

        {/* </div>  */}

        
        </>
    )
}

export default Briefcase;
