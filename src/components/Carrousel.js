import React, {useState} from "react";
import RightArrow from '../img/RightArrow.svg'
import LeftArrow from '../img/LeftArrow.svg'
import '../styles/components/Carrousel.css'


function Carrousel(props){
    const[current, setCurrent] = useState(0);
    const length = props.imagesLogement.length;

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    console.log(current);

    return(
        <div className='carrouselContainer'>

           {props.imagesLogement.map((image, index) =>{
               return(
                   <img className={index === current ? "carrouselImage current" : "carrouselImage"} src={image} key={index} alt=""></img>
           )})}
                       <img className ="RightArrow" alt="" src={RightArrow} onClick={nextImage}></img>
                       <img className ="LeftArrow" onClick={prevImage} alt="" src={LeftArrow}></img>
        </div>
    )

}

export default Carrousel
