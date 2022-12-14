import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from './img/logo.png'


const Footer = () => {
    return(
    <>
    <motion.footer  
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration: 1}}
    viewport={{ once: true }}
    className="w-full p-10 pt-20 footer text-base-content bg-gradient-to-b from-obscure to-primary ">
    <div>
        <img src={logo} className="w-16 h-20"/>                    
        <p>Copyright © 2022 - All right reserved by Ramiro Gumma <span className='text-primary'>|</span>Designed by Josefina Ritter</p>
    </div> 
    <div>
        <span className="footer-title">Company</span> 
        <Link className='links' to="/aboutme"> About me</Link> 
        <Link className='links' to="/">Home</Link>
        <Link className='links' to="/contactme">Contact Me</Link>
        <Link className='links' to="/briefcase">Briefcase</Link>
    </div> 
    <div>
        <span className="footer-title">Social</span> 
        <a href='https://www.linkedin.com/in/ramiro-gabriel-gumma-400993240/' target="BLANK"className="links">Linkedin</a> 
        <a href='https://github.com/Hamipluf' target="BLANK"className="links">Github</a> 
        <a href='https://www.workana.com/freelancer/b85e703950de6afa717ace9a8327c73a' target="BLANK"className="links">Workana</a>
    </div>
</motion.footer>
</>
)}

export default Footer