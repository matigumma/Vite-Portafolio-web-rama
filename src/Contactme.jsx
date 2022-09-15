import Footer from "./Footer"
import Navbar_responsive from "./Nav-bar-responsive"
const Contactme = () => {
    return(
        <>
              <Navbar_responsive />
            <div className="pt-20 bg-gradient-to-b from-dark to-obscure">          
                 <form className="ml-3 form-control justify-center">
                    <label className="label">
                        <span className="label-text text-ligth franklin">What is your name?</span>
                        
                    </label>
                    <input type="text" placeholder="Ramiro" required className="max-w-sm input input-bordered input-lg focus:border-infor" />

                    <label className="label">
                        <span className="label-text text-ligth franklin">What is your Email?</span>
                        
                    </label>
                    <input type="text" placeholder="example@hotmail.com" required className="max-w-sm input input-bordered focus:border-infor input-lg" />

                    <label className="label">
                        <span className="label-text text-ligth franklin">Wath is your Subjet?</span>
                        
                    </label>
                    <input type="text" placeholder="Subjet" className="max-w-sm input input-bordered input-lg focus:border-infor" />

                    <textarea  className= "max-w-sm mt-10 border-secondary textarea textarea-ghost focus:border-infor" placeholder="Message"></textarea>
                    <button className="mt-10 self-start px-10 btn btn-sm md:btn-md lg:btn-lg">Submit</button>
                </form>               
             
            </div>
            <Footer />  
        </>   
    )}
export default Contactme