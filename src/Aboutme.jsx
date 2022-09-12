import Navbar from "./nav-bar"
import Navbar_responsive from "./Nav-bar-responsive"
function Aboutme () {
    return(
        <>
        <div className="bg-gradient-to-b from-dark to-obscure">
            <Navbar />
            < Navbar_responsive />
        <div className=" text-white p-10 leading-8 tracking-wide">
                <p>
                <span className="text-info text-3xl">|</span> Poseo 1 año de experiencia con los lenguajes de HTML5, 
                JavaScript(ES6), CSS3. Se usar las tecnologías de Bootstrap, optimización de SEO, trabajo con Responsive Web Design. Soy estudiante de la Ciudad de Buenos Aires en Full-stack developer(node.js) y me encuentro en búsqueda de mi primer empleo como desarrollador. Tengo disponibilidad para entregarte el trabajo en 10 días, a lo cual va poder ver el avance y solicitar modificaciones, además le ofrezco si le llega a interesar mantenimiento de la Web. Soy responsable y profesional
                </p>
        </div>
        <hr />
            <div className="text-white p-10 leading-8 tracking-wide">
                <p>
                <span className="text-info text-3xl">|</span> I have 1 year of experience with the languages of JavaScript(ES6), HTML5 and CSS. I can work with Bootstrap technologies, SEO optimization, Responsive Web Design. I am a Full-stack developer(node.js) student from Buenos Aires and I am looking for my first job as a developer. I am focused and diligent when managing workloads and prioritizing tasks to meet deadlines. I thrive in environments where I am able to make a direct impact, utilizing abilities in HTML5, CSS and complex problem-solving to find solutions and achieve result. Thank you for visiting my web portfolio
                </p>
            </div>
        </div>
        </>
    )}

export default Aboutme