import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";


function App() {
  return (
    <div className="App">
<Link to="/Login">Sign In</Link>

<Link to="/SignUp">Sign Up</Link>

    </div>
  );
}

export default App;
