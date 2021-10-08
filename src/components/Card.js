import React from "react";
import {Link} from 'react-router-dom'

function Cards(props) {
                return (
                    <div className="card" >
                            <Link to={"Logement/" + props.id}>
                            <img className="cardImage" src={props.cover} alt="Présentation du lieu"></img>
                            <p className="cardTitle">{props.title}</p>
                            </Link>
                        </div>
                    )

}

export default Cards