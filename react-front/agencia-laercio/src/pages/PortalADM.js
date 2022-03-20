import React, { useState, useEffect } from 'react';
import AtualizaForm from '../components/AtualizaForm';
import CompraForm from '../components/CompraForm';
import Input from '../components/Input';


function PortalADM () {
    const[viagens,setViagens]=React.useState([]);
    const[id,setId] = useState('');

    React.useEffect(()=>{
        fetch("http://localhost:8081/viagem/getAll").then(res=>res.json())
        .then((result)=>{
            setViagens(result);
            }
        )
    },[])

    const deleteClick=(e)=>{
        e.preventDefault()
        const viagemRow={viageid}
        console.log(viagemRow);
        fetch("http://localhost:8081/viagem/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(viagemRow)
    
      }).then(()=>{
        console.log("Viagem Deletada")
      });

      window.location.reload()

    }
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
                                            <button onClick={deleteClick} className="btn btn-danger" type="submit">Deletar</button>
                                        </form>
                                    </td>
                                </tr> 
                                )
                              )
                            }     
                        </tbody>
                    </table>
                    
                    
                    <hr />
                    <div className="container d-flex justify-content-around">                        
                        <CompraForm/>  
                        
                        <AtualizaForm/>            
                    </div>
            </div>
            </div>  
             
        </section>
    );
}

export default PortalADM;