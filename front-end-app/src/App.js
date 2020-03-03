import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from "./Components/Signup";


function App() {
  return (
    <div className="App">
      <div>
        <h1>App Name!</h1>
      </div>
      
<Router>
<Home />
  <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            
  </Switch>

</Router>

    </div>
  );
}

export default App;
