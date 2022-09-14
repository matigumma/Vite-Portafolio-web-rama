import Navbar_responsive from "./Nav-bar-responsive"
import foto_rama_1 from "./img/foto-rama-1.png"
function Aboutme () {
    return(
        <>
        < Navbar_responsive />
        <div className="bg-gradient-to-b from-dark to-obscure">
            <div className="grid w-full grid-cols-3 pt-20 justify-items-center ">         
            <div className="col-span-2 pt-20"><h2 className="text-4xl font-extrabold text-center text-white franklin">Get to <span className="text-infor">know me better</span> </h2></div>
            <div className="m-5 justify-self-center">
                <img className="w-24" src={foto_rama_1} />
            </div>
        </div>
            
                <div className="p-5 pt-10 text-sm font-normal tracking-wide text-left text-white franklin">
                    <div className="">
                            <p>
                        <span className="text-3xl text-ligth">|</span> I am a Frontend Developer, with studies in Buenos Aires, I study independently, I have certifications in both workana and linkedin, besides being a student in full-stack course with node.js. I work with HTML, CSS and Javascript, I also use React, Tailwind and Bootstrap technologies, I adapt to agile development methodologies in order to always find the best solution to the company's problems.
                            </p>
                        </div>  
                        <div className="my-5 ">
                            <p>
                            <span className="text-2xl text-ligth">|</span>Soy Frontend Developer, con estudios en Buenos Aires, estudio de forma autónoma, poseo certificaciones tanto en workana y linkedin, además de ser estudiante en curso de full-stack con node.js. Trabajo con HTML, CSS y Javascript, también utilizo las tecnologias de React, Tailwind y Bootstrap, me adapto a metodologías agiles de desarrollo para poder siempre encontrar la mejor solución a los problemas de la empresa
                            </p>
                        </div>
                              
                </div>
            
        </div>
        </>
    )}

export default Aboutme