import React, {useState} from 'react';

const State =()=> {

    return(

        
        <div className="main">
            <div className="mainDiv">
                <ul>
                    <dt>useState is unique to functional components</dt>
                    <dd>Calss compnents have a sperate means of using and changing state.</dd>
                    <dt>useState Uses Array Destructuring</dt>
                    <dd>useState proves a state variable and a setState funtion</dd>
                    <dt>useState is a Hook</dt>
                    <dd>useState is a hook baked into React</dd>
                    <dt>Triggers Re-renders</dt>
                    <dd>Like with props changes, changing the state of a compenent re-renders the whole compenent.</dd>
                </ul>
                <StateExample />
            </div>
        </div>

        
    )
}

export default State


function StateExample(){
    const [text, setText] = useState('initial value ');
    const [likeNum, setLikeNum] = useState(0);
    const [textColor, setTextColor] = useState('blue');

    return(
        <div>
            <input value={text} onChange={e => setText(e.target.value)}/>
            <br />
            <img style={{ width: '100px', height: '100px'}} src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png"  onClick={e => setLikeNum(likeNum +1)}/>
            <span>{likeNum}</span>
            <br />
            <br />
            <p
            style={{color: textColor}}
            onMouseEnter={e => setTextColor('red')}
            onMouseLeave={e => setTextColor('blue')}
            >This text should be able to change
            </p>
        </div>
    )
}