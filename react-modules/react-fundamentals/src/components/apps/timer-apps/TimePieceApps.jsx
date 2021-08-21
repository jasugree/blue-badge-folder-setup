import React from 'react';
import TimerApp from './TimerApp';
import ClockApp from './ClockApp';
import StopWatchApp from './StopWatchApp';
import ClockAppCalifornia from './ClockAppCalifornia';

const TimePiecesApp = () => {
    return ( 
        <div className="main">
            <div className="mainDiv">
                <TimerApp />
                <hr />
                <ClockApp />
                <hr />
                <StopWatchApp />
                <hr />
                <ClockAppCalifornia/>
            </div>
        </div>
     );
}
 
export default TimePiecesApp;