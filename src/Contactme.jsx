import Navbar from "./nav-bar"
import Footer from "./Footer"
import Navbar_responsive from "./Nav-bar-responsive"
const Contactme = () => {
    return(
        <>
              
            <div className="bg-gradient-to-b from-dark to-obscure h-screen">
            <Navbar_responsive />
            <Navbar />  
                
                <div className="  ">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="ml-16 label-text text-ligth franklin">What is your name?</span>
                        
                    </label>
                    <input type="text" placeholder="Ramiro" className=" ml-16 input input-bordered w-full max-w-xs input-lg focus:border-infor " />

                    <label className="label">
                        <span className="ml-16 label-text text-ligth franklin">What is your Email?</span>
                        
                    </label>
                    <input type="text" placeholder="example@hotmail.com" className=" ml-16 input input-bordered focus:border-infor w-full max-w-xs input-lg" />

                    <label className="label">
                        <span className="ml-16 label-text text-ligth franklin">What is the asunt?</span>
                        
                    </label>
                    <input type="text" placeholder="Asunto" className=" ml-16 input input-bordered w-full max-w-xs input-lg focus:border-infor" />

                    <textarea  className="ml-16 textarea textarea-ghost mt-10 p-10 focus:border-infor" placeholder="Message"></textarea><br />
                    <button className="btn btn-lg ml-16 sm:btn-sm md:btn-md lg:btn-lg ">Submit</button>
                </div>
                </div>
                
            </div>
            <Footer />  
        </>   
    )}
export default Contactme