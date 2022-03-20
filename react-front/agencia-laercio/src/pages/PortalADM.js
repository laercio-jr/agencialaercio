import React, { useState, useEffect } from 'react';
import CompraForm from '../components/CompraForm';
import Input from '../components/Input';

function PortalADM () {
    const aaaa3 = 2
    const[viagens,setViagens]=React.useState([]);

    React.useEffect(()=>{
        fetch("http://localhost:8081/viagem/getAll").then(res=>res.json())
        .then((result)=>{
            setViagens(result);
            }
        )
    },[])
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
                            {viagens.map((viagem)=>(
                                <tr>
                                    <td>{viagem.id}</td>
                                    <td>{viagem.viajante}</td>
                                    <td>{viagem.destino}</td>
                                    <td>{viagem.temGuia ? "Sim":"Não"}</td>
                                    <td>
                                        <form>
                                            <button className="btn btn-danger" type="submit">Deletar</button>
                                        </form>
                                    </td>
                                </tr> 
                            )
                            )
                            }
               
                            <tr>
                                <td></td>
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
                        
                        <CompraForm/>

                        <div>
                            <h2>Atualizar Dados</h2>
                            <form>
                                <div className="form-group ">
                                    <label for="">ID da viagem</label>
                                    <select className="custom-select">                                        
                                        <option value="none" selected disabled hidden>Selecione um código</option>  
                                        {viagens.map((viagem)=>(                                          
                                            <option>{viagem.id}</option>
                                        ))
                                        }
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label for="">Nome do viajante</label>
                                    <input type="text" className="form-control" id="" placeholder="Digite seu nome"/>
                                </div>

                                <div className="form-group">
                                    <label for="">Destinos</label>
                                    <select className="custom-select">
                                        <option value="none" selected disabled hidden>Escolha um destino...</option>
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