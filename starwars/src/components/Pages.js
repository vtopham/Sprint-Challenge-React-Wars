import React, {useState} from "react"
import styled from "styled-components"


const PagesContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2%;
`;

const PageButton = styled.button`

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