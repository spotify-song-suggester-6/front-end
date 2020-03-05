import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import SignUp from "./Components/Signup";
import User from './Components/User';

// STYLES 



//Styles END

function App() {


  return (
    <div className="App">
      <div>
        <h1>Spotifynder!</h1>
      </div>


<Router>
<Header />

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
