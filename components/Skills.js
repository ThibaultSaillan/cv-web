import React from 'react'
import Title from './Title'
import Group from './SkillItemGroup'
import circle from './../static/css/circle.css'
import Button from './HeaderButton'

export default class Skills extends React.Component {
    render() {
        const skillImgs = [
            {
                name: 'Front-ends',
                list: [
                    { name: 'html5', color: '#f16529', value: '75' },
                    { name: 'css3', color: '#29a9df', value: '70' },
                    { name: 'bootstrap', color: '#8b57d9', value: '80' },                
                    { name: 'javascript', color: '#f7df1e', value: '70' }
                ]
            },
            {
                name: 'Back-ends',
                list: [
                    { name: 'nodejs', color: '#81ca2a', value: '70' },
                    { name: 'java', color: '#1e77b7', value: '40' },
                    { name: 'python', color: '#ffd43b', value: '60' }
                ]
            },
            {
                name: 'Tools',
                list: [
                    { name: 'git', color: '#F05032', value: '90' },
                    { name: 'terraform', color: '#5f43e9', value: '90'},
                    { name: 'ansible', color: 'black', value: '90'},
                    { name: 'npm', color: '#cb3736', value: '70' },
                    { name: 'docker', color: '#18bbb0', value: '95' }

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
                        Mon expérience de 2 ans en tant que DevOps m'a permis de développer beaucoup de compètences, j'ai utilisé des outils de virtualisation et d'orchestration tels que <i>Docker</i>,<i>Kubernetes</i> et <i>ECS (AWS)</i>.
                        J'ai développé un outils en <i>GO</i> et des <i>scripts shell</i>, dans le but d'automatiser un maximum de choses. Tout ceci intégré à une chaînes d’intégration continue <i>Jenkins</i>.
                        <br/>
                        <br/>
                        Je suis agile sur toute les plateformes cloud comme <i>AWS, Azure, GCP </i> et autres mais également sur des plateformes On-Premises grâce au outils d'infrastructure as code (IAS) comme <i>Terraform</i> et <i>Ansible</i>.
                        <br/>
                        <br/>
                        Je suis également trés à l'aise avec les différents systèmes d'exploitation, <i>Windows, Linux, etc..</i>
                        <br/>
                        <br/>
                        La sécurité informatique est quelque chose de très important pour moi, je fais de la veille technologique afin d'être toujours à jours sur les actualités.
                        <br/>
                        <br/>
                        Je suis quelqu'un qui adore apprendre de nouvelle chose, ce site réalisé par mes soins reflète mon envie d'apprendre de nouvelle technologie, dans ce cas <i>NextJS</i>.
                    </div>
                </div>
                <div id='detail'>Professionnel</div>
                <br />
                <div className="columns" >
                    <div className="column detail is-10 is-offset-1 is-6-desktop is-offset-3-desktop is-10-mobile is-offset-1-mobile">
                        <ul>
                            <li>Anglais : Lu, écrit et parlé</li>
                            <li>Travail en équipe</li>
                            <li>Gestion des projets</li>
                            <li>Rigoureux</li>
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
                        <Button title="Mon GitHub" url="https://github.com/Soxiis" />
                    </div>
                </div>
                
                <style jsx>{`
                    ul {
                        text-align: center;
                    }
                    #detail{
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
                `}</style>
            </section>
        )
    }
}