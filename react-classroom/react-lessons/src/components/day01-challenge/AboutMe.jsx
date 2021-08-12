function AboutMe(){
    const myCity = 'Westfield'
    const myState = 'Indiana'
    return (
        <div>
            <h1 style={{color: "red"}}>Jake Greene</h1>
            <p>I grew up in {myCity}, {myState}</p>
            <ul style={{listStyleType: "none"}}>
                <li>Venice, Italy</li>
                <li>Sedona, Arizona</li>
                <li>Door County, Wisconson</li>
            </ul>
        </div>

    )
}

export default AboutMe;