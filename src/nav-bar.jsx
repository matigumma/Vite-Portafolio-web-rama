import { Link } from "react-router-dom";
import logo from './img/logo.png'

const Navbar = () => {
  return(
   <>   
<div className='text-sm pr-5 franklin font-bold text-white fixed top-0 left-0 right-20'>
   <div className="h-8 w-10 ml-5 pt-3"> <Link to="/"> <img src={logo} alt="Logo Ramiro Gumma frontend developer" /></Link></div>
      <ul className="flex flex-row gap-2 justify-end">
    <li className="px-5 links" ><Link to="/">Home</Link></li>
    <li className="px-5 links" ><Link to="/aboutme">About Me</Link></li>
    <li className="px-5 links" ><Link to="/contactme">Contact Me</Link></li>
    <li className="px-5 links" ><Link to="/briefcase">Briefcase</Link></li>
   </ul>
</div>
</>
)
};


export default Navbar