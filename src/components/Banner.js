import React from 'react'
import '../styles/components/Banner.css';

function Banner(props){
    return(
        <div className="banner" >
            <div className="darkerImage"></div>
            <img src={props.img} alt="banner" className="bannerImage"></img>
            <h1 className="bannerText">{props.title}</h1>
        </div>
    )
}

export default Banner;