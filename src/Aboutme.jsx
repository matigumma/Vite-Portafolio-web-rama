import Navbar_responsive from "./Nav-bar-responsive"
import Footer from "./Footer"
import foto_rama_1 from "./img/foto-rama-1.png"
import { motion } from "framer-motion"
function Aboutme () {
    return(
        <>
        < Navbar_responsive />
        <section className="bg-gradient-to-b from-obscure to-dark">
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
        viewport={{ once: true }}
         className="py-5 ">
            <div className="grid w-full grid-cols-3 pt-20 lg:pt-5 justify-items-center ">         
                <div className="col-span-2 pt-20 lg:self-end "><h2 className="text-4xl font-extrabold text-center text-white lg:text-6xl franklin">Get to <span className="text-infor">know me better</span> </h2></div>
                <div className="m-5 justify-self-center lg:pt-20 lg:row-span-2">
                    <img className="w-24 lg:w-52" src={foto_rama_1} />
                </div>
            
                
                    <div className="col-span-3 p-5 pt-10 text-sm font-normal tracking-wide text-left text-white lg:col-span-2 lg:mb-10 lg:w-full lg:pt-20 franklin lg:text-lg ">
                        <div className="">
                                <p>
                            <span className="text-2xl text-ligth">|</span> I am a Frontend Developer, with studies in Buenos Aires, I study independently, I have certifications in both workana and linkedin, besides being a student in full-stack course with node.js. I work with HTML, CSS and Javascript, I also use React, Tailwind and Bootstrap technologies, I adapt to agile development methodologies in order to always find the best solution to the company's problems.
                                </p>
                            </div>
                            <div className="my-5 lg:pb-24 ">
                                <p>
                                <span className="text-2xl text-ligth">|</span>Soy Frontend Developer, con estudios en Buenos Aires, estudio de forma aut??noma, poseo certificaciones tanto en workana y linkedin, adem??s de ser estudiante en curso de full-stack con node.js. Trabajo con HTML, CSS y Javascript, tambi??n utilizo las tecnologias de React, Tailwind y Bootstrap, me adapto a metodolog??as agiles de desarrollo para poder siempre encontrar la mejor soluci??n a los problemas de la empresa
                                </p>
                            </div>
                                
                    </div>
            </div>
        </motion.div>       
       </section>
       <Footer />
 
        </>
    )}

export default Aboutme