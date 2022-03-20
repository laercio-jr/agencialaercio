import React, {useState} from "react";
import Input from "./Input";

function CompraForm () {
    const[nome,setNome] = useState();
    const[destino, setDestino] = useState('');
    const[guia, setGuia] = useState('');
    return(
            <div>
                <h2>Cadastrar viagem</h2>
                <form>
                    <div className="form-group">
                        <label for="">Nome do viajante</label>
                        <Input classe="form-control" nomeExibe="Digite um nome" tipo="Text"/>
                        
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
                        <Input tipo="checkbox" id="checkn1" classe="form-check-input"/>
                        <label className="form-check-label" for="checkn1">Guia Turistico (+ R$ 499,00)</label>
                    </div>

                    <br/>

                    <button type="submit" className="btn btn-success">Confirmar viagem</button>
                </form>
            </div>
    );
}

export default CompraForm;