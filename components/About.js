import React from 'react'
import Title from './Title'
import Interersts from './AboutInterest'

export default class About extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="💡 - À propos" color='#ffffff'/>
                <div className="columns is-mobile">
                    <div className="column has-text-right-tablet has-text-center is-12-mobile is-6-desktop">
                        <dl>
                            <dt>Nom complet</dt>
                            <dd>Thibault Saillan-Loubere</dd>
                            <dt>EMAIL</dt>
                            <dd><a href="mailto:thibault@saillan.com">thibault@saillan.com</a></dd>
                            <dt>METIER</dt>
                            <dd>DevOps</dd>
                        </dl>
                    </div>
                    <div id="mascot" className="column has-text-left is-hidden-touch">
                        <div className="mascot">
                            <img src="/static/images/mascot.png"/>
                            <img src="/static/images/mascot-oeil.png" className="img-top"/>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column detail is-10 is-offset-1 is-6-desktop is-offset-3-desktop is-10-mobile is-offset-1-mobile">
                        Passionné d’informatique depuis l’enfance, je suis quelqu'un <b>d'autonome et curieux</b>,
                        j’ai l’ambition de participer au développement technologique de notre société.<br/>
                        <br/>
                        Je possède des compétences sur les différents outils liés au métier de DevOps, tel que la mise en place d'une architecture sur une fournisseur de service cloud <i>(AWS, GCP, OVH)</i> dans un environnement de production par le biais d'outils d'Infrastructure As Code comme <i>Terraform</i>, le déploiement d'outils d'intégration et de livraison continu <i>Jenkins, Ansible</i> et la containerisation avec <i>Docker</i>.<br/>
                        <br/>
                        Mes études, stages et parcours en alternance m'ont permis d'acquérir une expérience dans le domaine des réseaux, des télécommunications et le développement, me permettant une polyvalence à tout types de situation.
                    </div>
                </div>
                <Interersts />
                <style jsx>{`
                  .wrapper {
                    padding-top: 50px;
                    padding-bottom: 50px;
                    background: #34495e;
                    color: #ffffff;
                    font-size: 1.3em;
                  }

                  dl > dt {
                    color: #ffcc00;
                    font-weight: bold;
                  }

                  dl > dd {
                    margin-bottom: 30px;
                  }

                  a {
                    color: #ffffff;
                  }

                  a:hover {
                    color: #5d5dc1;
                  }

                  .mascot {
                    margin-left: 20px;
                    width: 180px;
                    position: relative;
                    display: inline-block;
                  }

                  .mascot .img-top {
                    display: none;
                    position: absolute;
                    top: 0;
                    left: -20px;
                    z-index: 100;
                  }

                  .mascot:hover .img-top {
                    display: inline;
                    margin-left: 20px;
                    width: 180px;
                  }

                  .detail {
                    font-size: 0.95em;
                    text-align: justify;
                  }

                  .detail > b {
                    color: #F1A9A0;
                  }

                  .detail > i {
                    color: #00E640;
                  }
                `}</style>
            </section>
        )
    }
}