import React from "react";
import {propertiesData as Datas} from '../data/data';
import '../styles/pages/Logement.css'
import Carrousel from "../components/Carrousel";

function Logement(props){
    const displayedLogement = Datas.find(property => property.id === props.match.params.id);
    return(
        <main>
          <Carrousel imagesLogement={displayedLogement.pictures} />  
        </main>
        
    )

}

export default Logement