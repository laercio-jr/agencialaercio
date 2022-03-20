import React from "react";

function Input(props) {
    return(
        <input type={props.tipo} className={props.classe} id={props.id} placeholder={props.nomeExibe} />
    )
}

export default Input;