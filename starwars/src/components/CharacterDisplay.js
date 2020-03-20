import React, {useState, useEffect} from "react"
import axios from "axios"
import styled from "styled-components"



//STYLING FOR CHARACTER CARD
const CharacterHolder = styled.div`
    background-color: white;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 2%;
    
    padding: 1% 2%;
`;

const CardTitle = styled.h2`
    color: black;
`;

const Stats = styled.p`
    color: black;
`;


//FUNCTION
function CharacterCard(props) {

const {characters, setCharacters} = props;


//get the data
const home = "https://swapi.co/api/people/"

useEffect(() => {
    axios.get(`${home}`)
    .then((response) => {
      console.log(response) //remove this in the end
    //   setResponseData(response);
      setCharacters(response.data.results); //this is an array of people
      console.log(characters, " 1. after setCharacters");
    })
    .catch((response) => {
      alert("Try again, friend-o");
    })
  },[]);

  console.log(characters, " 2. after useeffect");


if (characters === null) {
    return (
        <h2>Loading...</h2>
    )
} else {
    return (
        <CharacterHolder>
            {characters.map((i) => {
                return (
                    <>
                        <CardTitle>{i.name}</CardTitle>
                        <Stats>Height: {i.height}</Stats>
                        <Stats>Mass: {i.mass}</Stats>
                        <Stats>Eye Color: {i.eye_color}</Stats>
                        <Stats>Number of films: {i.films.length}</Stats>
                    </>
                )
            })}
            
        </CharacterHolder>

    );
}
}

export default CharacterCard;