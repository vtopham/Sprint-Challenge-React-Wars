import React, {useState, useEffect} from "react"
import axios from "axios"
import styled from "styled-components"



//STYLING FOR CHARACTER CARD
const CharacterHolder = styled.div`
    background-color: white;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 2%;
    
    padding: 1% 5%;
`;

const CardTitle = styled.h2`
    color: black;
    font-family: 'Codystar', cursive;
`;

const Stats = styled.p`
    color: black;
    
    font-family: 'Press Start 2P', cursive;
    text-align: left;
`;


//FUNCTION
function CharacterCard(props) {

const {characters, setCharacters, setResponseData, pullURL} = props;

useEffect(() => {
    axios.get(`${pullURL}`)
    .then((response) => {
    //   console.log(response) //remove this in the end
      setResponseData(response);
      setCharacters(response.data.results); //this is an array of people

    })
    .catch((response) => {
      alert("Try again, friend-o");
    })
  },[pullURL]);



if (characters === null) {
    return (
        <h2>Loading...</h2>
    )
} else {
    return (
        <>
            {characters.map((i) => {
                return (
                    <CharacterHolder>
                        <CardTitle>{i.name}</CardTitle>
                        <Stats>Height: {i.height}</Stats>
                        <Stats>Mass: {i.mass}</Stats>
                        <Stats>Eye Color: {i.eye_color}</Stats>
                        <Stats>Number of films: {i.films.length}</Stats>
                    </CharacterHolder>
                )
            })}
        </>
       

    );
}
}

export default CharacterCard;