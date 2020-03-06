import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import HomeKey from "./components/HomeKey";
import Login from "./components/LoginKey";
import SignUp from "./components/Signup";
// import Search from "./components/Search";
// import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Songgetions</h1>
      </div>

      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/protected" component={HomeKey} />
          <Route path="/Home" component={HomeKey} />
          <Route path="/Login" component={Login} />
          {/* <Route path="/Search" component={Search} /> */}
          {/* <Route path="/Favorites" component={Favorites} /> */}
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
