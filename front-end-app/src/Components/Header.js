import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHomeDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 500px;

`;
const StyledHomeLinks = styled(Link)`
text-decoration: none;
    color: white;
    border: 1px solid black;
    background: black;
    border-radius: 15px;
    margin: 1%;
    font-size: 2rem;
    width: 90%;
`;


function Header({setShowHeader, showHeader}) {
  return (
    <StyledHomeDiv className="App">
<StyledHomeLinks onClick={()=> setShowHeader(!showHeader)} to="/Login">Sign In</StyledHomeLinks>

<StyledHomeLinks to="/SignUp">Sign Up</StyledHomeLinks>

    </StyledHomeDiv>
  );
}

export default Header;
