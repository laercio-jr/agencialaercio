import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import Home from "./pages/Home";
import Destinos from "./pages/Destinos";
import Promocoes from "./pages/Promocoes";
import PortalADM from "./pages/PortalADM";
import Contato from "./pages/Contato";

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/destinos" component={Destinos}/>
            <Route path="/promocoes" component={Promocoes}/>
            <Route path="/portaladm" component={PortalADM}/>
            <Route path="/contato" component={Contato}/>
        </BrowserRouter>
    );
}

export default Routes;