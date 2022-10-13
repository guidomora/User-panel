import React from "react";
import "../Styles/Boton.css"

const Boton = ({children}) => {
    return (
        <div>
            <button className="boton">{children}</button>
        </div>
    )
};

export default Boton