//Import and Mount this component in the App.jsx file
//create a button that will conduct the fecth of... Rick and Morty API
//https://rickandmortyapi.com/api/character


import React, { useState, useEffect } from "react";
import { CardColumns } from 'reactstrap';
import MortyChild from "./MortyChild";


const MortyParent = (props) => {
    const [characters, setCharacters] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";

  const fetchURL = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    setCharacters(data.results);
  };

  const handleClick = () => {
    fetchURL();
  };

  const displayCards = () => {
    return characters.map(character => <MortyChild character={character}/>)
  }

  return (
    <div>
      <p>Hello from Morty</p>
      <button onClick={handleClick}>Click for Morty</button>
      <CardColumns>{displayCards()}</CardColumns> 
    </div>
  );
};

export default MortyParent;
