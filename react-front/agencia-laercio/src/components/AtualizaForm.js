import React, {useState} from "react";
import Input from "./Input";

function AtualizaForm () {
    
    const[id,setId] = useState('');
    const[viajante,setNome] = useState('');
    const[destino, setDestino] = useState('');
    const[temGuia, setGuia] = useState('');
    
    const[viagens,setViagens]=React.useState([]);

    React.useEffect(()=>{
        fetch("http://localhost:8081/viagem/getAll").then(res=>res.json())
        .then((result)=>{
            setViagens(result);
            }
        )
    },[])   

    function checkChange() {
        setGuia(!temGuia);
    }

    const handleClick=(e)=>{
        e.preventDefault()
        const viagemRow={id, viajante, destino, temGuia}
        console.log(viagemRow)
        fetch("http://localhost:8081/viagem/delete",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(viagemRow)
    
      }).then(()=>{
        console.log("Nova viagem adicionada!")
      });
      window.location.reload()
    }

    return(
            <div>
                <h2>Atualizar dados</h2>
                <form>
                    <div className="form-group ">
                        <label for="">ID da viagem</label>
                        <select onChange={((e)=>setId(e.target.value))} className="custom-select">                                        
                            <option value="0" selected disabled hidden>Selecione um código</option>  
                            {viagens.map((viagem)=>(                                          
                                <option>{viagem.id}</option>
                            ))
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label for="">Nome do viajante</label>
                        <Input classe="form-control" nomeExibe="Digite um nome" tipo="Text" onChange={(e)=>setNome(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label for="">Destinos</label>
                        <select onChange={(e)=>setDestino(e.target.value)}className="custom-select">
                            <option value="none" selected disabled hidden>Escolha um destino...</option>
                            <option>Cristo Redentor</option>
                            <option>Disneyland</option>
                            <option>Torre Eiffel</option>
                            <option>Farol da Barra</option>
                            <option>Fernando de Noronha</option>
                        </select>
                    </div>

                    <div className="form-check">
                        <input type="checkbox" id="checkn1" className="form-check-input"checked={temGuia} onChange={checkChange}/>
                        <label className="form-check-label" for="checkn1">Guia Turistico</label>
                    </div>

                    <br/>

                    <button onClick={handleClick} type="submit" className="btn btn-primary">Confirmar viagem</button>
                </form>                
                    <br/>                    
                    <br/>                    
                    <br/>
            </div>
    );
}

export default AtualizaForm;