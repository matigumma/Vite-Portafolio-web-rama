import { Link } from "react-router-dom";
import logo from './img/logo.png';

const Navbar_responsive = () =>{
    return(
        <div className="md:hidden">
    <div className="navbar">
    <div className="navbar-start ">
      <div className="dropdown">
        <label tabIndex={0} className="btn bg-dark border border-infor focus:bg-infor focus:border-dark md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow text-ligth bg-gradient-to-l from-dark to-obscure rounded-box">
        <li className="pr-72 p-2 text-xs links" ><Link to="/">Home</Link></li>
        <li className="pr-72 p-2 text-xs links" ><Link to="/aboutme">About Me</Link></li>
        <li className="pr-72 p-2 text-xs links" ><Link to="/contactme">Contact Me</Link></li> 
        <li className="pr-72 p-2 text-xs links" ><Link to="/briefcase">Briefcase</Link></li>
        </ul>
      </div>
      <Link to="/"><img className="h-13 ml-60 w-10" src={logo} alt="" /></Link>
    </div>
    
  </div>
  </div>
  )
}
export default Navbar_responsive

