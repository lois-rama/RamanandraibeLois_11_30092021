import React from 'react'
import '../styles/components/Banner.css';

function Banner(){
    return(
        <div className="banner" >
            <div className="darkerImage"></div>
            <img src="https://photographersbreakthrough.com/wp-content/uploads/2020/05/eric-muhr-P_XxsdVgtpQ-unsplash.jpg" alt="banner" className="bannerImage"></img>
            <h1 className="bannerText">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner;