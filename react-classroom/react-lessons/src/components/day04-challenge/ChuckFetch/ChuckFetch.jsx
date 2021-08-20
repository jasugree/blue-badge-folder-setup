import React, { useState, useEffect} from 'react';

const ChuckFetch = (props) => {

    const URL = "https://api.chucknorris.io/jokes/random"

    const [joke, setJoke] = useState("");

    const fetchURL = async() => {
        const response = await fetch(URL)
        const data = await response.json()

        console.log(data.value);
        setJoke(data.value);
    }

    useEffect(() => {
      fetchURL();  
    },[]);

    const handleClick = () =>{
        fetchURL();
    }

    return(
        <div>
            <p>Hello from Chuck Fetch</p>
            <p>Joke: {joke}</p>
            <button onClick={handleClick}>Click For Joke</button>
        </div>
    )
}

export default ChuckFetch;