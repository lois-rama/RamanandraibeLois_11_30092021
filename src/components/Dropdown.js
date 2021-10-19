import React, {useState} from "react";
import '../styles/components/Dropdown.css'
import DropdownArrow from '../img/DropdownArrow.svg'

function Dropdown(props){
    const[dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownState = () => setDropdownOpen(!dropdownOpen);

    return(     
    <div className={props.class}>
        <button className="dropdownBtn" onClick={dropdownState}>
            {props.name}
            <img className={dropdownOpen ? "arrow open" : "arrow"} src={DropdownArrow} alt=""></img>
        </button>
        <div className={dropdownOpen ? "dropdownContent" : "dropdownContent hidden"}>
        {Array.isArray(props.content) ? 
             <ul className="dropdownList">
                {props.content.map((equipement) => <li key={equipement} className="dropdownListItem"> {equipement} </li> )}
            </ul>
        :
            <p>{props.content}</p>
        }
        </div>
    </div>
    )
}

export default Dropdown