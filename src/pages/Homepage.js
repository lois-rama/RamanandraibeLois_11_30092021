import React from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import {propertiesData as Datas} from '../data/data';

function Homepage(){
    return(
        <main>
            <Banner />
            <section className="CardsContainer">
                {Datas.map((data) => {
                    return <Card key={data.id} id={data.id} cover={data.cover} title={data.title} />
                })}
            </section>
        </main>
    )
}

export default Homepage