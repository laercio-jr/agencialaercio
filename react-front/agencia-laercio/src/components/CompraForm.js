import React, {useState} from "react";
import Input from "./Input";

function CompraForm () {

    const atual = window.location.href;
    const[viajante,setNome] = useState('');
    const[destino, setDestino] = useState('');
    const[temGuia, setGuia] = useState('');

    function checkChange() {
        setGuia(!temGuia);
    }

    const handleClick=(e)=>{
        e.preventDefault()
        const viagemRow={viajante, destino, temGuia}
        console.log(viagemRow);
        fetch("http://localhost:8081/viagem/add",{
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
                <h2>Cadastrar viagem</h2>
                <form>
                    <div className="form-group">
                        <label for="">Nome do viajante</label>
                        <Input classe="form-control" nomeExibe="Digite um nome" tipo="Text" valor={viajante} onChange={(e)=>setNome(e.target.value)}/>
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
                        <input type="checkbox" id="checkn1" className="form-check-input" onChange={checkChange}/>
                        <label className="form-check-label" for="checkn1">Guia Turistico (+ R$ 499,00)</label>
                    </div>

                    <br/>

                    <button onClick={handleClick} className="btn btn-success">Confirmar viagem</button>
                </form>
            </div>
    );
}

export default CompraForm;