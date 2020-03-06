import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import SignUp from "./Components/Signup";
import User from './Components/User';

// STYLES 
const AppName = styled.h1`
font-family: cursive;
font-size: 3rem;
`;


//Styles END

function App() {
const [showHeader, setShowHeader] = useState(true);

  return (
    <div className="App">
      <div>
        <AppName>Spotifynder!</AppName>
      </div>


<Router>
  {showHeader ? <Header setShowHeader={setShowHeader} showHeader={showHeader} /> : <div></div> }
  <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/Login" render={props => <Login {...props}  />} />
            
            <Route path="/SignUp" render={props => <SignUp {...props}  />} />
            <Route path="/User" render={props => <User {...props}  />} />
            
  </Switch>

</Router>

    </div>
  );
}

export default App;
