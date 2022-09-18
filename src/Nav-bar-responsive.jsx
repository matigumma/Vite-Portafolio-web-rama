import { Link } from "react-router-dom";
import logo from './img/logo.png';
import { motion } from "framer-motion";



const Navbar_responsive = () =>{
    return(
      <>
      {/* NAV MOBILE */}
        <div className="fixed w-full md:hidden">
    <div className="navbar">
    <div className=" navbar-start">
      <div className=" dropdown">
        <label tabIndex={0} className="border btn bg-dark active:border-infor hover:bg-infor md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white hover:text-obscure" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <motion.ul
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{
         duration: 1,
         ease: "easeInOut"
        }}       
         tabIndex={0} className="mt-3 text-white shadow menu menu-compact dropdown-content bg-obscure rounded-box">
        <li className="p-2 text-xs pr-60 links" ><Link to="/">Home</Link></li>
        <li className="p-2 text-xs pr-60 links" ><Link to="/aboutme">About Me</Link></li>
        <li className="p-2 text-xs pr-60 links" ><Link to="/contactme">Contact Me</Link></li> 
        <li className="p-2 text-xs pr-60 links" ><Link to="/briefcase">Briefcase</Link></li>
        </motion.ul>
      </div>
      <Link to="/"><motion.img 
      initial={{
        
      }}
      className="w-8 h-12 ml-64" src={logo} alt="Logo Ramiro Gumma frontend developer" /></Link>
    </div>
    
  </div>
  </div>

  {/* Nav Desktop */}

  <div className='fixed top-0 left-0 w-full pr-5 text-sm font-bold text-white franklin right-20 md-m:hidden'>
   <motion.div 
      initial={{
        
        x: -100,
     }}
     animate={{
     
      x: 0,
     }}
     transition={{
      type: "spring",
      duration: .8,
     }}
   className="w-10 h-8 pt-3 lg:ml-10 lg:"> <Link to="/"> <img src={logo} alt="Logo Ramiro Gumma frontend developer" /></Link></motion.div>
      <motion.ul layout
         initial={{
          scale: .1,
          x: -800,
       }}
       animate={{
        scale: 1,
        x: 0,
       }}
       transition={{
        type: "spring",
        duration: 1.5,
       }}
     
      className="flex flex-row justify-end gap-20">
    <motion.li className=" links" ><Link to="/">Home</Link></motion.li>
    <motion.li className=" links" ><Link to="/aboutme">About Me</Link></motion.li>
    <motion.li className=" links" ><Link to="/contactme">Contact Me</Link></motion.li>
    <motion.li className=" links" ><Link to="/briefcase">Briefcase</Link></motion.li>
   </motion.ul>
</div>
  </>
  )
}
export default Navbar_responsive
  


