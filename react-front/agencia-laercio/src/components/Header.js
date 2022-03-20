import React from 'react';

function Header () {
    return(
        <header>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                <div className="container">
                    <a className="navbar-brand" href="http://localhost:3000/Home">
                        <img className="tamanho-imagem" src="../img/logo.png"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav justify-content-end flex-grow-1">

                            <li className="nav-item">
                                <a className="nav-link text-dark" href='http://localhost:3000/Home'>Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-dark" href='http://localhost:3000/Destinos'>Destinos</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-dark" href='http://localhost:3000/Promocoes'>Promoções</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link text-dark" href='http://localhost:3000/PortalADM'>Portal do ADM</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-dark" href='http://localhost:3000/Contato'>Contato</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;


