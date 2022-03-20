import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from 'react-router';

import Home from "./pages/Home";
import Destinos from "./pages/Destinos";
import Promocoes from "./pages/Promocoes";
import PortalADM from "./pages/PortalADM";
import Contato from "./pages/Contato";

function Routess(){
    return(
        <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/destinos" component={Destinos}/>
            <Route path="/promocoes" component={Promocoes}/>
            <Route path="/portaladm" component={PortalADM}/>
            <Route path="/contato" component={Contato}/>
        </Routes>
    );
}

export default Routess;