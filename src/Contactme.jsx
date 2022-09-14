import Footer from "./Footer"
import Navbar_responsive from "./Nav-bar-responsive"
const Contactme = () => {
    return(
        <>
              
            <div className="h-screen bg-gradient-to-b from-dark to-obscure">
            <Navbar_responsive />
                        
                <div className="pt-20 ">
                <div className="ml-3 form-control">
                    <label className="label">
                        <span className="label-text text-ligth franklin">What is your name?</span>
                        
                    </label>
                    <input type="text" placeholder="Ramiro" className="w-full max-w-xs input input-bordered input-lg focus:border-infor" />

                    <label className="label">
                        <span className="label-text text-ligth franklin">What is your Email?</span>
                        
                    </label>
                    <input type="text" placeholder="example@hotmail.com" className="w-full max-w-xs input input-bordered focus:border-infor input-lg" />

                    <label className="label">
                        <span className="label-text text-ligth franklin">Wath is your Subjet?</span>
                        
                    </label>
                    <input type="text" placeholder="Subjet" className="max-w-xs input input-bordered input-lg focus:border-infor" />

                    <textarea  className= "p-5 mt-10  border-secondary textarea textarea-ghost focus:border-infor" placeholder="Message"></textarea><br />
                    <button className="m-2 btn btn-lg sm:btn-sm md:btn-md lg:btn-lg">Submit</button>
                </div>
                </div>
                
            </div>
            <Footer />  
        </>   
    )}
export default Contactme