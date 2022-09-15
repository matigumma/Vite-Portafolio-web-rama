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
function Briefcase() {

    return (
        <>
        <Navbar_responsive />
        <div className='bg-gradient-to-b from-dark to-obscure'>
            
                {/*SLILLS*/}
              
                <div className="pt-32 pl-10">              
                        <h2 className=' text-4xl lg:text-6xl franklin font-extrabold text-infor'> <span className='text-2xl text text-ligth'>//</span> Skills</h2>
                </div>

                <div className='w-11/12  pt-16 m-auto text-justify'>
                    <p className='text-xs lg:text-xl font-medium leading-relaxed text-white franklin'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam eum natus perferendis similique tempora quod, modi odit repellendus laboriosam dicta, quam vel molestias odio, doloribus ad illum nesciunt placeat..</p>
                </div>                   
                        
                 <div className="grid grid-cols-2 gap-5 pt-10 gap-y-10 justify-items-center">
                      <div><img className="lg:w-28 lg:h-28 w-16 h-16 duration-75 active:scale-125 lg:hover:scale-125" src={css} alt="" />
                      </div>
                      <div><img className="lg:w-28 lg:h-28 w-16 h-16 duration-75 active:scale-125 lg:hover:scale-125" src={js} alt="" />
                      </div>
                      <div><img className="lg:w-28 lg:h-28 w-16 h-16 duration-75 active:scale-125 lg:hover:scale-125" src={html} alt="" />
                      </div>
                      <div><img className="lg:w-28 lg:h-28 w-16 h-16 duration-75 active:scale-125 lg:hover:scale-125" src={react} alt="" />
                      </div> 
                 </div>      

                  {/*TOOLS*/}
                  <div className="pt-32 pl-10  font-extrabold">              
                        <h2 className='lg:text-6xl text-4xl franklin text-infor'> <span className='text-2xl text text-ligth'>//</span> Tools</h2>
                </div>

                <div className='w-11/12 pt-16 m-auto text-justify'>
                    <div><h2 className='text-xs lg:text-xl font-medium text-white franklin'>Lorem ipsum dolor,<br /> 
                    sit amet consectetur adipisicing elit. Obcaecati, laboriosam eos. Ut deserunt sint, consectetur nesciunt facilis, totam quo iusto iste odit dignissimos, possimus aut consequatur pariatur eum ducimus earum.</h2></div>
                </div>

                <div className="grid grid-cols-3 p-5 pt-10 lg:pb-20 justify-items-center">
                                <div><img className="lg:w-24 lg:h-24 w-16 h-16 duration-75 active:scale-125 lg:hover:scale-125" src={github} alt="" />
                                 </div>
                                <div><img className="lg:w-24 lg:h-24 w-16 h-16 duration-75 active:scale-125 lg:hover:scale-125" src={git} alt="" />
                                    </div>
                                <div className=''><img className="lg:w-24 lg:h-24 w-16 h-16 duration-75 active:scale-125 lg:hover:scale-125" src={tailwind} alt="" />
                                    </div>
                            </div>

                
                       
                       
        </div> 
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
