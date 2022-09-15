import { Link } from "react-router-dom";
import logo from './img/logo.png';


const Navbar_responsive = () =>{
    return(
      <>
        <div className="fixed w-full md:hidden">
    <div className="navbar">
    <div className=" navbar-start">
      <div className=" dropdown">
        <label tabIndex={0} className="border btn bg-obscure border-infor focus:bg-infor focus:border-dark md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="mt-3 shadow menu menu-compact dropdown-content text-ligth bg-gradient-to-l from-dark to-obscure rounded-box">
        <li className="p-2 text-xs pr-60 links" ><Link to="/">Home</Link></li>
        <li className="p-2 text-xs pr-60 links" ><Link to="/aboutme">About Me</Link></li>
        <li className="p-2 text-xs pr-60 links" ><Link to="/contactme">Contact Me</Link></li> 
        <li className="p-2 text-xs pr-60 links" ><Link to="/briefcase">Briefcase</Link></li>
        </ul>
      </div>
      <Link to="/"><img className="w-8 h-12 ml-64" src={logo} alt="Logo Ramiro Gumma frontend developer" /></Link>
    </div>
    
  </div>
  </div>

  

  {/* Nav Desktop */}

  <div className='fixed top-0 left-0 w-full pr-5 text-sm font-bold text-white franklin right-20 md-m:hidden'>
   <div className="w-10 h-8 pt-3 lg:ml-10 lg:"> <Link to="/"> <img src={logo} alt="Logo Ramiro Gumma frontend developer" /></Link></div>
      <ul className="flex flex-row justify-end gap-2">
    <li className="px-5 links" ><Link to="/">Home</Link></li>
    <li className="px-5 links" ><Link to="/aboutme">About Me</Link></li>
    <li className="px-5 links" ><Link to="/contactme">Contact Me</Link></li>
    <li className="px-5 links" ><Link to="/briefcase">Briefcase</Link></li>
   </ul>
</div>
  </>
  )
}
export default Navbar_responsive

