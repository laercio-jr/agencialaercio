import React from "react";

function Input(props) {
    return(
        <input checked={props.checked} onChange={props.onChange} value={props.valor} type={props.tipo} className={props.classe} id={props.id} placeholder={props.nomeExibe} />         
        )
}

export default Input;