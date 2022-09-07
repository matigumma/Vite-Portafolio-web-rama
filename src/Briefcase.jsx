import css from './img/css-3.png'
import js from './img/js.png'
import html from './img/html5.png'
import react from './img/react.png'
import github from './img/github.png'
import git from './img/git.png'
import tailwind from './img/Tailwind.png'
import devops from './img/DevOps News 1.png'
import appproduct from './img/appproduct.png'
import Navbar from './nav-bar'
function Briefcase() {

    return (
        <>
        <div className='bg-gradient-to-b from-dark to-obscure py-10'>
        <Navbar />
                {/* Subtitulo */}
                <div className='font-bold text-6xl pt-40 pl-48 grid grid-cols-3'>
                     <div className=" franklin">              
                        <h2 className='text-infor'>Skills</h2>
                      </div>  
                        <span className='pl-10 text-primary '>//</span>
                      <div className='inconsolota'>
                        <h2>Tools</h2>
                       </div>         
                </div>         

                <div className='w-11/12 text-justify m-auto p-20'>

                   <div><h2 className='franklin font-medium text-white text-lg'>Lorem ipsum dolor,<br /> sit amet consectetur adipisicing elit. Obcaecati, laboriosam eos. Ut deserunt sint, consectetur nesciunt facilis, totam quo iusto iste odit dignissimos, possimus aut consequatur pariatur eum ducimus earum.</h2></div>

                </div>

                   
                        <div className="grid grid-cols-2 gap-10 gap-x-52 px-32 py-10">
                            <div className="grid grid-cols-2">
                                <div><img className="w-32 h-28 hover:scale-125 duration-75" src={css} alt="" />
                                    </div>
                                <div><img className="w-32 h-28 hover:scale-125 duration-75" src={js} alt="" />
                                    </div>
                                <div><img className="w-32 h-28 hover:scale-125 duration-75" src={html} alt="" />
                                    </div>
                               <div><img className="w-32 h-28 hover:scale-125 duration-75" src={react} alt="" />
                                    </div> 
                            </div> 

                            <div className="grid grid-cols-2 gap-5  ">
                                <div><img className="w-32 h-32 hover:scale-125 duration-75" src={github} alt="" />
                                 </div>
                                <div><img className="w-32 h-32 hover:scale-125 duration-75" src={git} alt="" />
                                    </div>
                                <div className='ml-13 pl-5'><img className="ml-20 w-32 h-32 hover:scale-125 duration-75" src={tailwind} alt="" />
                                    </div>
                            </div>
                      </div>

                       
        </div> 
                    
                
        {/* PROYECTOS */}

           {/* <div className=''><h2 className='text-center text-xl text-white w-11/12 m-auto rounded-lg '>Proyectos <span className='text-secondary'>| Experience</span></h2></div>  */}
            {/* <div className= 'grid grid-cols-2 gap-5 pt-5 '> */}
                 {/* DevOps News */}
                {/* <div>
                    <img className='border-solid border-ligth border-2 m-auto w-4/5 cursor-pointer hover:scale-105 duration-75' src={devops} alt="" />
                </div> */}
                {/* App Product */}
                {/* <div>
                    <img className='border-solid border-ligth border-2 m-auto w-4/5 cursor-pointer hover:scale-105 duration-75' src={appproduct} alt="" />
                </div> */}

            {/* </div> */}

        {/* </div>  */}

        
        </>
    )
}

export default Briefcase;
