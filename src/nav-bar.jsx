import { Link } from "react-router-dom";
import logo from './img/logo.png'

const Navbar = () => {
  return(
   <>      
<div className='fixed top-0 left-0 w-full pr-5 text-sm font-bold text-white  franklin right-20 md-m:hidden'>
   <div className="w-10 h-8 pt-3 ml-5"> <Link to="/"> <img src={logo} alt="Logo Ramiro Gumma frontend developer" /></Link></div>
      <ul className="flex flex-row justify-end gap-2">
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