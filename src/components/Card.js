import React from "react";
import {Link} from 'react-router-dom'
import '../styles/components/Card.css'

function Cards(props) {
    return (
        <div className="card" >
            <Link to={"Logement/" + props.id}>
                <img className="cardImage" src={props.cover} alt="Présentation du lieu"></img>
                <div className="opacity"></div>
                <p className="cardTitle">{props.title}</p>
            </Link>
        </div>
    )

}

export default Cards