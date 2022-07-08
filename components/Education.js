import React from 'react'
import Title from './Title'
import Item from './EducationItem'

export default class Education extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="🏫 - Étude" color='#FFFFFF'/>
                <div className="container">
                    <Item 
                        time="2020 - 2022"
                        name="Master Systèmes Informatiques pour le Génie de la Logistique Industrielle et des Services (SIGLIS)"
                        major="Université de Pau et des Pays de l'Adour (UPPA) - Anglet "
                        color="#2ecc71"
                    />
                    <Item 
                        time="2019 - 2020"
                        name="Licence Réseaux très haut débit (RTHD)"
                        major="IUT des pays de l'Adour (UPPA) - Mont-de-Marsan "
                        color="#3498db"
                    />
                    <Item
                        time="2016 - 2018"
                        name="DUT Réseaux et télécommunications (R&T)"
                        major="IUT des pays de l'Adour (UPPA) - Mont-de-Marsan "
                        color="#e5ad06"
                    />
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #c0392b url('/static/images/bg-edu.jpg');
                        background-size: cover;
                        color: #333333;
                        font-size: 1.3em;
                    }
                `}</style>
            </section>
        )
    }
}