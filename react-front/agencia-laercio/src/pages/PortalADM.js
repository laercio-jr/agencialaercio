import React from 'react';

function PortalADM () {
    return(
        <section className="container">
            <h1 class="text-white">Controle de Viagens (Restrito)</h1>
            
            <div className="row centralizar">
                <div className="col-md-10">
                    <h2 class="text-white">Lista de viagens Confirmadas</h2>
                    <table className="text-center table table-striped table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>Id</th>
                                <th>Viajante</th>
                                <th>Destino</th>
                                <th>Guia turístico</th>
                                <th>X</th>
                            </tr>
                        </thead>
                        <tbody>                                
                            <tr>
                                <td>@viagem.Id</td>
                                <td>@viagem.Viajante</td>
                                <td>@viagem.Destino</td>
                                <td>@viagem.TemGuia</td>
                                <td>
                                    <form>
                                        <button className="btn btn-danger" type="submit">Deletar</button>
                                    </form>
                                </td>
                            </tr> 
                        </tbody>
                    </table>
                    
                    
                    <hr />
                    <div className="container d-flex justify-content-around">
                        <div>
                            <h2>Cadastrar viagem</h2>
                            <form>
                                <div className="form-group">
                                    <label for="">Nome do viajante</label>
                                    <input type="text" className="form-control" id="" placeholder="Digite um nome"/>
                                </div>

                                <div className="form-group">
                                    <label for="">Destinos</label>
                                    <select className="custom-select">
                                        <option selected>Escolha um destino...</option>
                                        <option>Cristo Redentor</option>
                                        <option>Disneyland</option>
                                        <option>Torre Eiffel</option>
                                        <option>Farol da Barra</option>
                                        <option>Fernando de Noronha</option>
                                    </select>
                                </div>

                                <div className="form-check">
                                    <input type="checkbox" id="checkn1" className="form-check-input"/>
                                    <label className="form-check-label" for="checkn1">Guia Turistico</label>
                                </div>

                                <br/>

                                <button type="submit" className="btn btn-success">Confirmar viagem</button>
                            </form>
                        </div>

                        <div>
                            <h2>Atualizar Dados</h2>
                            <form>
                                <div className="form-group ">
                                    <label for="">ID da viagem</label>
                                    <select className="custom-select" asp-for="Id">
                                        <option selected>-- Selecione um código</option>                                            
                                            <option>@viagem.Id</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label for="">Nome do viajante</label>
                                    <input type="text" className="form-control" id="" placeholder="Digite seu nome"/>
                                </div>

                                <div className="form-group">
                                    <label for="">Destinos</label>
                                    <select className="custom-select">
                                        <option selected>Escolha um destino...</option>
                                        <option>Cristo Redentor</option>
                                        <option>Disneyland</option>
                                        <option>Torre Eiffel</option>
                                        <option>Farol da Barra</option>
                                        <option>Fernando de Noronha</option>
                                    </select>
                                </div>


                                <div className="form-check">
                                    <input type="checkbox" id="checkn1" className="form-check-input"/>
                                    <label className="form-check-label" for="checkn1">Guia Turistico</label>
                                </div>

                                <br />

                                <button type="submit" className="btn btn-primary">Alterar</button>

                            </form>
                        </div>
                    </div>
            </div>
            </div>  
             
        </section>
    );
}

export default PortalADM;