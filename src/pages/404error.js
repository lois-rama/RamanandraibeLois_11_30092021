import React from "react";
import {Link} from 'react-router-dom';
import "../styles/pages/404error.css"


function Error404(){
    return(
        <div className="errorContainer">
            <h1 className="errorTitle">404</h1>
            <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">
                <p className="errorLink">Retourner sur la page d'acceuil</p>
            </Link>
        </div>

    )
}

export default Error404