import React from "react";
import {Redirect} from 'react-router-dom';
import {propertiesData as Datas} from '../data/data';
import '../styles/pages/Logement.css'
import Carrousel from "../components/Carrousel";
import Dropdown from "../components/Dropdown";
import InfoLogement from "../components/InfoLogement";

function Logement(props){
    const displayedLogement = Datas.find(property => property.id === props.match.params.id);
    if (!displayedLogement) {
			return <Redirect to='/404' />;
    }
    return(
      <main>
        <Carrousel imagesLogement={displayedLogement.pictures} />  
        <InfoLogement title={displayedLogement.title} location={displayedLogement.location} tags={displayedLogement.tags} rating={displayedLogement.rating} host={displayedLogement.host} />      
        <div className ="dropdownContainer">    
          <Dropdown class="dropdown" name="Description" content={displayedLogement.description} /> 
          <Dropdown class="dropdown" name="Equipements" content={displayedLogement.equipments} />
        </div>
      </main>
    )

}

export default Logement