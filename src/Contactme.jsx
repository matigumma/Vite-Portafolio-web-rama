import Footer from "./Footer"
import Navbar_responsive from "./Nav-bar-responsive"
import { motion } from "framer-motion"
const Contactme = () => {
    return(
        <>
              <Navbar_responsive />

              
            <motion.div
                      
            className="pt-20 bg-gradient-to-b from-obscure to-dark min-h-screen hero">         
       
  <div className="flex-col hero-content lg:flex-row-reverse">
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      default: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01]
      },
      scale: {
        type: "just",
      }
    }}  className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contactame para trabajar con migo!</h1>
      <p className="py-6">En este medio podran mandarme mail directo a mi casilla de hotmail.</p>
    </motion.div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
      <div className="card-body">
        <div className="form-control">
            <label className="label">
            <span className="label-text text-ligth franklin">What is your name?</span>                        
            </label>
            <input type="text" placeholder="Ramiro" required className="max-w-sm input input-bordered input-lg focus:border-infor" />
        </div>
        <div className="form-control">
        <label className="label">
        <span className="label-text text-ligth franklin">What is your Email?</span></label>
        <input type="text" placeholder="example@hotmail.com" required className="max-w-sm input input-bordered focus:border-infor input-lg" />
        </div>
        <div className="form-control">
        <label className="label">
         <span className="label-text text-ligth franklin">Wath is your Subjet?</span></label>
         <input type="text" placeholder="Subjet" className="max-w-sm input input-bordered input-lg focus:border-infor" />
        </div>
        <div className="form-control">
        <textarea  className= "max-w-sm mt-5 border-secondary textarea textarea-ghost focus:border-infor" placeholder="Message"></textarea>
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  </div>





                 {/* <form className="justify-center ml-3 form-control">
                    <label className="label">
                        <span className="label-text text-ligth franklin">What is your name?</span>
                        
                    </label>
                    <input type="text" placeholder="Ramiro" required className="max-w-sm input input-bordered input-lg focus:border-infor" />

                    <label className="label">
                        <span className="label-text text-ligth franklin">What is your Email?</span></label>
                    <input type="text" placeholder="example@hotmail.com" required className="max-w-sm input input-bordered focus:border-infor input-lg" />

                    <label className="label">
                    <span className="label-text text-ligth franklin">Wath is your Subjet?</span></label>
                    <input type="text" placeholder="Subjet" className="max-w-sm input input-bordered input-lg focus:border-infor" />

                    <textarea  className= "max-w-sm mt-10 border-secondary textarea textarea-ghost focus:border-infor" placeholder="Message"></textarea>
                    <button className="self-start px-10 mt-10 btn btn-sm md:btn-md lg:btn-lg">Submit</button>
                </form>                */}
             
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
export default Contactme