import React from "react";
import Dropdown from "../components/Dropdown";
import "../styles/pages/About.css"
import Banner from "../components/Banner";
import { about } from "../data/data";

function About(){
    return(
        <main>
            <Banner img="https://cosmicsports.com/wp-content/uploads/sites/2/2020/01/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg" />
            <section>
                <div className ="dropdownAboutContainer">
                    {about.map((element, index) =>{
                        return(
                         <Dropdown class="dropdownAbout" name={element.title} content={element.content} key={index}/>
                        )
                    })}
                    
            </div>
            </section>
        </main>
    )
}

export default About