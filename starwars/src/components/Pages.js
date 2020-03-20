import React, {useState} from "react"
import styled from "styled-components"


const PagesContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2%;
    
`;

const PageButton = styled.button`
    margin-right: 4%;
    width: 100px;
    height: 40px;
    font-size: 16px;
    border-radius: 10px;
    border: 1px solid dodgerblue;
    background-color: white;

    &:hover {
        background-color: dodgerblue;
        color: white;
    }

`;


function Pages(props) {
    const {pullURL, setPullURL, responseData} = props;

    function nextPage() {
        setPullURL(responseData.data.next);
    }
    
    function previousPage() {
        setPullURL(responseData.data.previous);
    }


    return (
        <PagesContainer>
            <PageButton onClick = {previousPage}>Previous</PageButton>
            <PageButton onClick = {nextPage}>Next</PageButton>
        </PagesContainer>
        
    )
}

export default Pages