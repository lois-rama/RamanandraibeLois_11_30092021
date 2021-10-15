import React from "react";
import Rating from '../components/Rating';
import '../styles/components/InfoLogement.css'

function InfoLogement(props){
    return(
        <div className="infoContainer">
            <div className="Wrapper">
                <h1>{props.title}</h1>
                <p>{props.location}</p>
                <div className="tagsContainer">
                    {props.tags.map((tag, index) => {
                        return(
                        <div className="tag" >
                            <p key={index + tag} className="tagText">{tag}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className="RatingHostWrapper">
                <Rating rating={props.rating} />
                <p className="host">{props.host.name}</p>
                <img className="hostImg" src={props.host.picture} alt=""></img>
            </div>
        </div>
    )
}

export default InfoLogement