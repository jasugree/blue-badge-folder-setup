import React, {useState, useEffect} from 'react';

const getTimeString = () => {
    const date = new Date(Date.now()).toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' });
    return date;
}


const ClockAppCalifornia =()=>{
    const [time, setTime] = useState(getTimeString());
    
    useEffect(()=> {
        const interval = setInterval(()=>{
            let date = getTimeString();
            setTime(date);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return(
        <div>
            <h1 className="section-title">React Pacific Time Clock</h1>
            <hr className="explination" />
            <p>{time} (Pacific Time)</p>
        </div>
    )
}

export default ClockAppCalifornia ;