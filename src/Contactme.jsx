import Navbar from "./nav-bar"
function Contactme (){
    return(
        <>
        <Navbar />    
        
        <div className="flex flex-col justify-end m-32 ">
        <div className="form-control w-full max-w-xs ">
            <label className="label">
                <span className="label-text">What is your name?</span>
                
            </label>
            <input type="text" placeholder="Ramiro" className="input input-bordered w-full max-w-xs input-lg focus:border-infor " />

            <label className="label">
                <span className="label-text">What is your Email?</span>
                
            </label>
            <input type="text" placeholder="example@hotmail.com" className="input input-bordered focus:border-infor w-full max-w-xs input-lg" />

            <label className="label">
                <span className="label-text">What is your asunt?</span>
                
            </label>
            <input type="text" placeholder="Asunto" className="input input-bordered w-full max-w-xs input-lg focus:border-infor" />

            <textarea  className="textarea textarea-ghost mt-10 focus:border-infor" placeholder="Message"></textarea>
            

        
                    
        </div>
        </div>
        </>

    )}
export default Contactme