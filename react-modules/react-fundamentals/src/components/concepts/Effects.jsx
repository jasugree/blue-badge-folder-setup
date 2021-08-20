import React, {useState, useEffect} from 'react';

const Effects = () => {
    return(
        <div className="main">
            <div className="mainDiv">
                <h2>Below are some important points regarding effects:</h2>
                <ul>
                    <li>They are triggered with state and prop updates, as well as after initial render to the DOM.</li>
                    <li>Effects are used to trigger certain actions based updon changes to the component.</li>
                    <li>Effects can return cleanup functions, which clean up timers using memory, listners to outside APIs, and other fundtions which may use system resources.</li>
                </ul>
                <SampleEffect/>
                <br />
                <SampleEffect/>
            </div>
        </div>
    )
}
export default Effects

const SampleEffect = () => {
    useEffect(()=>{ 
        let timer;
        if(timerRunning){
            timer = window.setTimeout(() => {
                console.log('The timer expired', Date.now()/1000);
                setTimerRunning(false);
            }, 2000)
        }
        return () => {window.clearTimeout(timer); console.log('The timeer was cleaned up', Date.now()/1000)}
    })
    useEffect(()=> {
        console.log('This painting needs some happy trees');
    }, [])
    
    let buttonHandler = () => {
        if(!timerRunning){
            setTimerRunning(true);
        }
    }

    const [timerRunning, setTimerRunning] = useState(false);
    return(
        <div style={{border: '1px dashed black'}}>
            <h2>This component demoes an effect</h2>
            <button onClick={buttonHandler}>Click me to start an effect in the console</button>
        </div>
    )
}