import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import AppRouter from './AppRouter';

 const StyledHomeDiv = styled.div`

 `;
 const StyledHomeLinks = styled(Link)`

 `;


function User({userId}) {
  return (
<div>
 <AppRouter id={userId}/> 
 </div>

  )
}

export default User;
