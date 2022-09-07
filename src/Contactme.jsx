import Navbar from "./nav-bar"
function Contactme (){
    return(
        <>
        <Navbar />     
        <hr />
        <div className="bg-primary pt-10">
            <div className="w-4/5 m-auto">
                <form className="flex flex-col">
                    <input className="p-5 border-4 rounded-sm m-2" type="text" name="nombre" placeholder="Nombre"/>
                    <input className="p-5 border-4 rounded-sm m-2" type="text" name="apellido" placeholder="Apellido"/>
                    <input className="p-5 border-4 rounded-sm m-2" type="text" name="asunto" placeholder="Asunto" />
                    <textarea className="mt-5" name="mensaje" id="" cols="10" rows="6" placeholder="Escribe aqui tu mensaje"></textarea>
                    <button className="btn btn-info btn-lg">Enviar</button>
                </form>            
            </div>
         </div>
        </>

    )}
export default Contactme