import React from "react";
import {propertiesData as Datas} from '../data/data';
import '../styles/pages/Logement.css'
import Carrousel from "../components/Carrousel";
import Dropdown from "../components/Dropdown";
import InfoLogement from "../components/InfoLogement";

function Logement(props){
    const displayedLogement = Datas.find(property => property.id === props.match.params.id);
    return(
        <main>
          <Carrousel imagesLogement={displayedLogement.pictures} />
          <InfoLogement title={displayedLogement.title} location={displayedLogement.location} tags={displayedLogement.tags} rating={displayedLogement.rating} host={displayedLogement.host} />
          <div className ="dropdownContainer">
            <Dropdown name="Description" content={displayedLogement.description} />
            <Dropdown name="Equipements" content={displayedLogement.equipments} />
          </div>
        </main>
        
    )

}

export default Logement