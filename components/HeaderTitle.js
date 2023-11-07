import Typist from 'react-typist';
const cursor = {
    element: '_',
    hideWhenDone: true,
    hideWhenDoneDelay: 0,
}

export default ({color}) => (
    <div className="is-flex-mobile">
        <Typist cursor={cursor}>
            <span>Thibault </span> <br />Saillan-Loubere<br /> 26 Ans - DevOps
        </Typist>
        <style jsx>{`
            div { 
                color: ${color};
                font-size: 2.9em;
                font-weight: bold;
            }
            span {
                color: #c0392b;
            }
        `}</style>
    </div> 
)