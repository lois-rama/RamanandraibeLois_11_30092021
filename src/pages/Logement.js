import React from "react";
import {propertiesData as Datas} from '../data/data';
import '../styles/pages/Logement.css'
import Carrousel from "../components/Carrousel";
import Dropdown from "../components/Dropdown";

function Logement(props){
    const displayedLogement = Datas.find(property => property.id === props.match.params.id);
    return(
        <main>
          <Carrousel imagesLogement={displayedLogement.pictures} />  
          <Dropdown />
        </main>
        
    )

}

export default Logement