import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../img/LOGO.svg'
import '../styles/components/Header.css';

function Header(){
    return (
    <header className="header">
        <nav className="navbar">
            <img src={logo} alt="kasa-logo"/>
            <ul className="nav">
                <NavLink exact to="/">
                    <li className="navigationNavLink">Accueil</li>
                </NavLink>
           
                <NavLink exact to="/APropos">
                    <li className="navigationNavLink">A propos</li>
                </NavLink>
            </ul>
        </nav>
    </header>
) 

}
export default Header;