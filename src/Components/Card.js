import React from "react";
import "../Styles/Cards.css"

const Card = ({children}) => {
    return(
        <div className="cards">
            {children}
        </div>
    )
};

export default Card;