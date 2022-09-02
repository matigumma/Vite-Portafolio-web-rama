import React from "react"
import { Route, Routes, BrowserRouter} from "react-router-dom"

import Home from "./Home";
import Briefcase from "./Briefcase";
import Aboutme from "./Aboutme";
import Contactme from "./Contactme";


function App (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/briefcase" element={<Briefcase />} />
                <Route path="/aboutme" element={<Aboutme />} />
                <Route path="/contactme" element={<Contactme />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
