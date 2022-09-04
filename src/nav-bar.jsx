import { Link } from "react-router-dom";
import logo from './img/logo.png'

const Navbar = () => {
  return(
   <>   
<div className='bg-primary text-lg pr-5  text-white' >
   <div className="h-10 w-14  bg-primary ml-5 pt-5"> <Link to="/"> <img src={logo} alt="Logo Ramiro Gumma frontend developer" /></Link></div>
      <ul className="flex flex-row gap-2 justify-end">
    <li className="p-5 hover:scale-105 hover:duration-75 hover:underline hover:underline-offset-8" ><Link to="/">Home</Link></li>
    <li className="p-5 hover:scale-105 hover:duration-75 hover:underline hover:underline-offset-8" ><Link to="/aboutme">About Me</Link></li>
    <li className="p-5 hover:scale-105 hover:duration-75 hover:underline hover:underline-offset-8" ><Link to="/contactme">Contact Me</Link></li>
    <li className="p-5 hover:scale-105 hover:duration-75 hover:underline hover:underline-offset-8" ><Link to="/briefcase">Briefcase</Link></li>
   </ul>
</div>
</>
)
};


export default Navbar