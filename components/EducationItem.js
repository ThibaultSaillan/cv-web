import React from 'react'

export default class EducationItem extends React.Component {
    render() {
        let { color, name, time,major } = this.props
        return (
            <div className="columns wrapper">
                <div className="column item is-10 is-offset-1 is-6-desktop is-offset-3-desktop is-10-mobile is-offset-1-mobile">
                    <div className="columns">
                        <div className="column is-12 has-text-left school">
                            <p>{time}</p>  
                            <h4 className="name">
                                {name}
                            </h4>
                            { major && <i>École: {major}</i> }
                        </div>
                    </div>
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 15px;
                        padding-bottom: 15px;   
                    }
                    .item {
                        border-left: 8px solid ${color};
                        background-color: #ffffff;
                        box-shadow: 10px 10px 0px #333333;
                    }
                    .school .time {

                    }
                    .school .name {
                        font-weight: bold;
                        font-size: 1.3em;
                        color: ${color};
                    }
                `}</style>
            </div>
        )
    }
}