import React from "react";
import Home from "../pages/Home";
import Destinos from "../pages/Destinos";
import Promocoes from "../pages/Promocoes";
import PortalADM from "../pages/PortalADM";
import Contato from "../pages/Contato";

import Routes from "../routes";

function Main (){

    const atual = window.location.href;

    return(
        <main role="main" className="container fundo-gradiente pb-3">
            {
                atual == 'http://localhost:3000/Home' ? <Home/>
                :
                atual == 'http://localhost:3000/Destinos' ? <Destinos/>
                : 
                atual == 'http://localhost:3000/Promocoes' ? <Promocoes/>
                : 
                atual == 'http://localhost:3000/PortalADM' ? <PortalADM/>
                :
                atual == 'http://localhost:3000/Contato' ? <Contato/>
                : 
                'Conteúdo não existente'   
            }
        </main>
    );
}

export default Main;