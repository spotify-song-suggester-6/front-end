import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHomeDiv = styled.div`

`;
const StyledHomeLinks = styled(Link)`

`;


function Header() {
  return (
    <StyledHomeDiv className="App">
<StyledHomeLinks to="/Login">Sign In</StyledHomeLinks>

<StyledHomeLinks to="/SignUp">Sign Up</StyledHomeLinks>

    </StyledHomeDiv>
  );
}

export default Header;
