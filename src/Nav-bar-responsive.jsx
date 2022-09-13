import { Link } from "react-router-dom";
import logo from './img/logo.png';

const Navbar_responsive = () =>{
    return(
        <div className="w-full md:hidden">
    <div className="navbar">
    <div className="overflow-hidden navbar-start">
      <div className="w-11/12 dropdown">
        <label tabIndex={0} className="border btn bg-dark border-infor focus:bg-infor focus:border-dark md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="mt-3 shadow menu menu-compact dropdown-content text-ligth bg-gradient-to-l from-dark to-obscure rounded-box">
        <li className="p-2 text-xs pr-60 links" ><Link to="/">Home</Link></li>
        <li className="p-2 text-xs pr-60 links" ><Link to="/aboutme">About Me</Link></li>
        <li className="p-2 text-xs pr-60 links" ><Link to="/contactme">Contact Me</Link></li> 
        <li className="p-2 text-xs pr-60 links" ><Link to="/briefcase">Briefcase</Link></li>
        </ul>
      </div>
      <Link to="/"><img className="w-8 h-12 ml-72" src={logo} alt="" /></Link>
    </div>
    
  </div>
  </div>
  )
}
export default Navbar_responsive

