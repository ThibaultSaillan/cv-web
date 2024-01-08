import React from 'react'
import Title from './Title'
import Timeline from './ExperiencesTimelineItem'

export default class Experiences extends React.Component {

    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="💼 - Experiences" color='#bf3a2a'/>
                <div className="container">
                    <Timeline side="right" time="Juillet 2023 - Aujourd'hui" color="#E95251">
                        <h4 style={{'color': '#E95251'}}>Simplifield</h4>
                        <p>
                            <i className="position">Chapter lead - Ingénieurs DevOps</i><br/>
                            <ul>
                                <li>Gestion de projet</li>
                                <li>Planification stratégique</li>
                                <li>Amélioration des processus DevOps</li>
                                <li>Collaboration avec les autres équipes pour assurer une intégration fluide des pratiques</li>
                            </ul>
                        </p>
                    </Timeline>
                    <Timeline side="right" time="Septembre 2022 - Juillet 2023" color="#E95251">
                        <h4 style={{'color': '#E95251'}}>Simplifield</h4>
                        <p>
                            <i className="position">Ingénieurs DevOps</i><br/>
                            <ul>
                                <li>Automatisation de déploiements cloud</li>
                                <li>Optimisation de workflows CI/CD</li>
                                <li>Intégration d'outils de monitoring et d'alerting</li>
                                <li>Gestion de la configuration et de la sécurité des infrastructures</li>
                            </ul>
                        </p>
                    </Timeline>
                    <Timeline side="left" time="Septembre 2020 - Septembre 2022 (2 ans)" color="#3498db">
                        <h4 style={{'color': '#3498db'}}>Origins-Digital</h4>
                        <p>
                            <i className="position">Alternance - DevOps</i><br/>
                            Mise en place et automatisation de <b>l’infrastructure cloud</b><br/>
                        </p>
                    </Timeline> 
                    <Timeline side="right" time="Septembre 2019 - Septembre 2020 (1 an)" color="#e67e22">
                        <h4 style={{'color': '#e67e22'}}>Orange</h4>
                        <p>
                            <i className="position">Alternance - Responsable d’opérations réseau</i><br/>
                            Etude et pilotage du déploiement du réseau <b>FTTO</b>.<br/>
                        </p>
                    </Timeline> 
                    <Timeline side="left" time="Septembre 2017 - Septembre 2018 (1 an)" color="#e67e22">
                        <h4 style={{'color': '#e67e22'}}>Orange</h4>
                        <p>
                            <i className="position">Alternance - Technicien d’intervention grand public</i><br/>
                            Maintenance réseau <b>cuivre</b>. <br/>
                            Installation et maintenance <b>fibre optique</b>.<br/>
                        </p>
                    </Timeline>
                    <Timeline side="right" time="Janvier 2016 (6 Semaines)" color="#E10075">
                        <h4 style={{'color': '#E10075'}}>Deutsche Telekom (Allemagne - Gießen)</h4>
                        <p>
                            <i className="position">Stage - Technicien d’intervention grand public</i><br/>
                            Installation <b>fibre optique</b>, maintenance réseau <b>cuivre</b>. <br/>
                        </p>
                    </Timeline>
                    <Timeline side="left" time="Novembre 2015 (4 Semaines)" color="#8bc34a">
                        <h4 style={{'color': '#8bc34a'}}>Brok’land - DAX (40)</h4>
                        <p>
                            <i className="position">Stage - Technicien informatique</i><br/>
                            Maintenance informatique, vente équipement réseau sur <b>internet</b>. <br/>
                        </p>
                    </Timeline>
                    <Timeline side="right" time="Mars 2015 (4 Semaines)" color="#e5d335">
                        <h4 style={{'color': '#e5d335'}}>Mairie de PAU (64)</h4>
                        <p>
                            <i className="position">Stage - Technicien reseau</i><br/>
                            Maintenance, configuration équipement, câblage <b>réseaux</b>. <br/>
                        </p>
                    </Timeline>
                    <Timeline side="left" time="Novembre 2014 (4 Semaines)" color="#93776c">
                        <h4 style={{'color': '#93776c'}}>Préfecture de la Gironde - BORDEAUX (33)</h4>
                        <p>
                            <i className="position">Stage - Technicien informatique</i><br/>
                            Maintenance informatique. <br/>
                        </p>
                    </Timeline>
                </div>


                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #b2b2b2 url('/static/images/bg-exp.jpg');
                        background-size: cover;
                        color: #333333;
                        font-size: 1.3em;
                    }
                    h4 {
                        font-size: 1.2em;
                        font-weight: bold;
                    }
                    p {
                        font-size: 0.8em;
                    }
                    i.position {
                        color: #c0392b;
                    }
                `}</style>
            </section>
        )
    }
}