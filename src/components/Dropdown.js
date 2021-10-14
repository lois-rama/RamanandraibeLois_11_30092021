import React, {useState} from "react";
import '../styles/components/Dropdown.css'
import DropdownArrow from '../img/DropdownArrow.svg'

function Dropdown(props){
    const[dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownState = () => setDropdownOpen(!dropdownOpen);

    return(     
    <div className="dropdown">
        <button className="dropdownBtn" onClick={dropdownState}>
            <img className={dropdownOpen ? "arrow open" : "arrow"} src={DropdownArrow} alt=""></img>
        </button>
        <div className="dropdownContent">
        </div>
    </div>
    )
}

export default Dropdown