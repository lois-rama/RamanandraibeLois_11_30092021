import React from "react";
import RedStar from '../img/RedStar.svg'
import LightgreyStar from '../img/LightgreyStar.svg'
import '../styles/components/Rating.css'

function Rating(props){
    return(
        <div className="starsContainer" >
            <img src={props.rating >= 1 ? RedStar : LightgreyStar} alt="" className="star"></img>
            <img src={props.rating >= 2 ? RedStar : LightgreyStar} alt="" className="star"></img>
            <img src={props.rating >= 3 ? RedStar : LightgreyStar} alt="" className="star"></img>
            <img src={props.rating >= 4 ? RedStar : LightgreyStar} alt="" className="star"></img>
            <img src={props.rating >= 5 ? RedStar : LightgreyStar} alt="" className="star"></img>
        </div>
    )
}

export default Rating