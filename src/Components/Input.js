import React from "react";
import "../Styles/Inputs.css"

const Input = ({label, ...rest}) => {
    return(
        <div className="inputs">
            <label>{label}</label>
            <input {...rest}/>
        </div>
    )
};

export default Input