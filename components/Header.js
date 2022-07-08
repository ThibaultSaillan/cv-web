import React from 'react'
import Background from './HeaderBackground';
import ProfileImage from './HeaderProfile';
import Brace from './HeaderBrace'
import Title from './HeaderTitle'



const themes = {
    light: {
        background: '#f5f5f5',
        font: '#4a4a4a',
    },
    dark: {
        background: '#2f353f',
        font: '#e4e4e4',
    }
}

export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            theme: 'light'
        }
    }

    toggleTheme() {
        let newtheme = this.state.theme === 'light' ? 'dark' : 'light'
        this.setState({
            theme: newtheme
        })
    }

    render() {
        let theme = themes[this.state.theme];
        return (
            <section className="hero is-mobile has-text-centered">
                <div className="hero">
                    <div className="container">
                        <div className="columns">
                            <Brace type="left" color={theme.font}/>
                            <ProfileImage toggle={this.toggleTheme.bind(this)} />
                            <Brace type="right" color={theme.font}/>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <Title color={theme.font}/>
                            </div>
                        </div>
                    </div>
                <Background color={theme.background}/>
                </div>
            </section>
        )
    }
}