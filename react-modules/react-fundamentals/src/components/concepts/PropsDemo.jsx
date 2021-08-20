import React, {useState} from 'react';
import PropTypes from 'prop-types';

const PropsDemo = () => {

    const [color, setColor] = useState('white');
    const [background, setBackground] = useState('purple');
    const [borderRadius, setBorderRadius] = useState('5px');
    const [borderStyle, setBorderStyle] = useState('dashed');
    const [display, setDisplay] = useState('inline-block');
    const [width, setWidth] = useState('350px');
    const [textAlign, setTextAlign] = useState('center');

    let styles ={
        color: color,
        backgroundColor: background,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign

    }

    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
    }
    const toggleBackgroundColor = () => {
        background === 'purple' ? setBackground('black') : setBackground('purple');
    }
    const toggleBorderRadius = () => {
        borderRadius === '5px' ? setBorderRadius('20px') : setBorderRadius('5px');
    }
    const toggleBorderStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle('double') : setBorderStyle('dashed');
    }


    return (
        <div className="main">
            <div className="mainDiv">
                <div style={styles}>
                <FunctionalComponent string = "Color Toggle" function={toggleColor} selectedStyle={color}/>
                <FunctionalComponent string = "Background Color Toggle" function={toggleBackgroundColor}  selectedStyle={background} />
                <FunctionalComponent string = "Border Radius Toggle"  function={toggleBorderRadius}  selectedStyle={borderRadius}/>
                <FunctionalComponent string = "Border Style Toggle" function={toggleBorderStyle}  selectedStyle={borderStyle} />
                </div>
            </div>
        </div>
    )
}

export default PropsDemo;

const FunctionalComponent = (props) => {
    return (
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
            <TinyComponent selectedStyle={props.selectedStyle} />
        </div>
    )
}

const TinyComponent = (props) =>{
    return (
        <div>
            <p>The Current style is: {props.selectedStyle}</p>
        </div>
    )
}

FunctionalComponent.defaultProps = {
    string: 'This is wild!',
    function: () => console.log("can I see this in my dev tools?"),
    selectedStyle: 'what style???'
}

FunctionalComponent.propTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
}