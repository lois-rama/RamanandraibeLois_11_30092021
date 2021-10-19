import React from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import {propertiesData as Datas} from '../data/data';
import '../styles/pages/Homepage.css'

function Homepage(){
    return(
        <main>
            <Banner img="https://photographersbreakthrough.com/wp-content/uploads/2020/05/eric-muhr-P_XxsdVgtpQ-unsplash.jpg" title="Chez vous, partout et ailleurs" />
            <section className="CardsContainer">
                {Datas.map((data) => {
                    return <Card key={data.id} id={data.id} cover={data.cover} title={data.title} />
                })}
            </section>
        </main>
    )
}

export default Homepage