import React from "react"
import logo from '../img/LOGOwhite.svg'
import '../styles/components/Footer.css'

function Footer(){
    return (
        <footer className="footer" >
            <img src={logo} alt="Kasa logo" className="footerLogo"></img>
            <p className="footerText">© 2020 Kasa. All rights reserved</p>
        </footer>
)
}

export default Footer