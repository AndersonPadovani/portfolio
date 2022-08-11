import React from "react";

import "./card.css";

const Card = (props) => {    
    return(
        <div className="cardProjeto">
            <h4>{props.title}</h4>  

            <figcaption>
                <img src={props.image} alt="Imagen Card Projeto"></img>
            </figcaption>

            <p>{props.info}</p>
            
            {props.ver === '1' && <a href={process.env.PUBLIC_URL+props.url} target={'_blank'} rel="noreferrer" >Ver Mais</a>}
        </div>
    )
}

export default Card;