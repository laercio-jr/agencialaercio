import React from 'react';

function Home () {
    return(
        <section>      
            <div>
                <br />
                <br />
                <br />
            </div>
            <article className="container text-center inner cover">
                <h1 className="cover-heading">Bem vindo a AgênciaLJ.</h1>
                <p className="lead">Compre suas passagens por um preço acessível, além de ter a comodidade de contratar um guia turístico com facilidade, por uma taxa de custo!</p>
                <p className="lead">
                    <a href="http://localhost:3000/Destinos" className="btn btn-lg btn-secondary">Conferir destinos disponíveis</a>
                </p>
            </article>
        </section>
    );
}

export default Home;


/*
import React from 'react';

function Home () {
    return(

    );
}

export default Home;
*/