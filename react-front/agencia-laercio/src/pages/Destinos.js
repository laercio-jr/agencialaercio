import React from 'react';
import CompraForm from '../components/CompraForm';

function Destinos () {
    return(
        <section>
        <h1 className="text-center text-white">Destinos</h1>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <h2 className="text-white">Escolha o seu destino!</h2>
        
                    <div className="card-group text-center">
                        <div className="card">
                            <img className="card-img-top" src="./img/Cristo.jpg" alt="Cristo Redentor"/>
                            <div className="card-body">
                                <h5 className="card-title">Cristo Redentor</h5>
                                <p className="card-text">Cristo Redentor é uma estátua art déco que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, no Parque Nacional da Tijuca, com vista para a maior parte da cidade do Rio de Janeiro, Brasil.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">R$ 5500,00</small>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="./img/farol-da-barra.jpg" alt="Farol da Barra"/>
                            <div className="card-body">
                                <h5 className="card-title">Farol da Barra</h5>
                                <p className="card-text">O farol da Barra teve um papel de extrema importância nas navegações durante o período de colonização do nosso país. Ele foi construído após a invasão dos holandeses ao Forte de Santo Antônio da Barra, instalado no mesmo espaço do farol para dar suporte aos navegadores e identificar invasões de estrangeiros.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">R$ 7799,00</small>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="./img/eiffel.jpg" alt="Torre Eiffel"/>
                            <div className="card-body">
                                <h5 className="card-title">Torre Eiffel</h5>
                                <p className="card-text">A Torre Eiffel é uma torre de treliça de ferro forjado no Champ de Mars em Paris, França. Recebeu o nome do engenheiro Gustave Eiffel, cuja empresa projetou e construiu a torre.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">R$ 15099,00</small>
                            </div>
                        </div>
                    </div>
        
                    <br/>
        
                    <div className="card-group text-center">
                        <div className="card">
                            <img className="card-img-top" src="./img/disneyland.jpg" alt="Disneyland"/>
                            <div className="card-body">
                                <h5 className="card-title">Disneyland</h5>
                                <p className="card-text">O Disneyland Park, originalmente Disneyland e comumente referido em português como a Disneylândia,[1] é o primeiro de dois parques temáticos construídos no Disneyland Resort em Anaheim, California, inaugurado em 17 de julho de 1955. </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">R$ 13999,00</small>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="./img/noronha.jpg" alt="Fernando de Noronha"/>
                            <div className="card-body">
                                <h5 className="card-title">Fernando de Noronha</h5>
                                <p className="card-text">Fernando de Noronha é um arquipélago vulcânico situado a cerca de 350 quilómetros ao largo da costa nordeste do Brasil. Tem o nome da sua maior ilha, um parque marinho e santuário ecológico protegido com uma linha costeira recortada e vários ecossistemas.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">R$ 9899,00</small>
                            </div>
                        </div>
                    </div>
        
                    <hr />                    
                    <CompraForm/>
                    <br />
                    <hr />
                </div>
            </div>
        </div>

        </section>
    );
}

export default Destinos;