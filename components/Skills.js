import React from 'react'
import Title from './Title'
import Group from './SkillItemGroup'
import circle from '../static/css/circle.css'
import Button from './HeaderButton'

export default class Skills extends React.Component {
    render() {
        const skillImgs = [
            {
                name: 'Front-ends',
                list: [
                    { name: 'bootstrap', color: '#8b57d9', value: '80' },
                    { name: 'javascript', color: '#f7df1e', value: '80' },
                    { name: 'html5', color: '#f16529', value: '75' },
                    { name: 'css3', color: '#29a9df', value: '70' },
                ]
            },
            {
                name: 'Back-ends',
                list: [
                    { name: 'nodejs', color: '#81ca2a', value: '80' },
                    { name: 'go', color: '#00AED8', value: '70' },
                    { name: 'python', color: '#ffd43b', value: '60' },
                    { name: 'java', color: '#1e77b7', value: '40' },
                ]
            },
            {
                name: 'Tools',
                list: [
                    { name: 'docker', color: '#18bbb0', value: '95' },
                    { name: 'git', color: '#F05032', value: '95' },
                    { name: 'kubernetes', color: '#d33833', value: '90' },
                    { name: 'terraform', color: '#5f43e9', value: '90'},
                    { name: 'ansible', color: 'black', value: '90'},
                ]
            } 
        ]
        return (
            <section className="hero wrapper has-text-centered">
                <style dangerouslySetInnerHTML={{ __html: circle }} />
                <Title title="👨‍💻 - Compétences" color='#ffffff'/>

                <div id='detail'>Techniques</div>
                <br />
                <div className="columns" >
                    <div className="column detail is-10 is-offset-1 is-6-desktop is-offset-3-desktop is-10-mobile is-offset-1-mobile">
                        Au cours de mon parcours en tant que DevOps, j'ai acquis une expertise approfondie en utilisant une gamme variée d'outils. J'ai travaillé avec des outils de virtualisation et d'orchestration comme <i>Docker</i>, <i>Kubernetes</i>, et <i>ECS (AWS)</i>. J'ai également développé des outils en <i>GO</i> et écrit des <i>scripts shell</i> pour maximiser l'automatisation des processus. Ces compétences sont intégrées dans des systèmes d’intégration continue tels que <i>Jenkins</i>, <i>CircleCI</i>, <i>GitHub Action</i>, et <i>ArgoCD</i>.
                        <br/>
                        <br/>
                        Je possède une solide expérience sur diverses plateformes cloud, y compris <i>AWS</i> et <i>GCP</i>, ainsi que sur des infrastructures On-Premises, grâce à ma maîtrise des outils d'Infrastructure as Code (IaC) tels que <i>Terraform/Terragrunt</i> et <i>Ansible</i>.
                        <br/>
                        <br/>
                        Mon aisance avec différents systèmes d'exploitation, incluant <i>Windows, Linux,</i> et <i>MacOS</i>, s'accompagne d'une compétence en sécurité informatique, domaine dans lequel je réalise une veille technologique continue pour rester à jour.
                        <br/>
                        <br/>
                        Passionné d'apprentissage, je suis toujours désireux d'explorer et de maîtriser de nouvelles technologies.
                    </div>

                </div>
                <div id='detail'>Professionnel</div>
                <br />
                <div className="columns">
                    <div className="column detail is-10 is-offset-1 is-6-desktop is-offset-3-desktop is-10-mobile is-offset-1-mobile" style={{ textAlign: 'justify' }}>
                        <ul>
                            <li>Maîtrise de l'Anglais : Capacité à lire, écrire et parler couramment</li>
                            <li>Travail d'équipe : Collaboration efficace, communication et partage des connaissances</li>
                            <li>Gestion de projets : Planification stratégique, gestion des délais et coordination d'équipe</li>
                            <li>Rigueur et Précision : Attention aux détails et engagement envers la qualité</li>
                            <li>Adaptabilité : Flexibilité face aux changements et capacité à apprendre rapidement</li>
                            <li>Résolution de problèmes : Analyse critique et approche créative pour résoudre des défis complexes</li>
                        </ul>
                    </div>
                </div>
                <div id='detail'>Technologie utilsé</div>
                <div className="container">
                    {
                        skillImgs.map((item, key) => (
                            <Group key={key} name={item.name} items={item.list} />    
                        ))
                    }
                </div>
                <div className="columns">
                    <div className="column">
                        <br/>
                        <Button title="Mon GitHub" url="https://github.com/ThibaultSaillan" />
                    </div>
                </div>
                
                <style jsx>{`
                  ul {
                    text-align: justify;
                  }

                  #detail {
                    color: #ffffff;
                    font-weight: bold;
                  }

                  .detail {
                    color: #ffffff;
                    text-align: justify;
                  }

                  .wrapper {
                    padding-top: 50px;
                    padding-bottom: 50px;
                    background: #2f353f;
                    background-size: cover;
                    color: #333333;
                    font-size: 1.3em;
                  }

                  .detail > b {
                    color: #F1A9A0;
                  }

                  .detail > i {
                    color: #00E640;
                  }

                  . detail > o {
                    text-decoration: underline;
                    text-decoration-color: #ffffff;
                  }
                `}</style>
            </section>
        )
    }
}