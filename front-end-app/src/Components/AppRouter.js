import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Profile from './Profile';
import Home from './Home';



function AppRouter() {
    return (
      <Router>
        <div>
          <nav className="main-nav">

          </nav>
          <Switch>
            {/* <Route path="" component={Spells} />
            <Route path="" component={Character} /> */}
            <Route path="/User/home" component={Home} /> 
            {/* <Route path="/User/profile" component={Profile} /> */}
          </Switch>
        </div>
        <footer>
            <Link to="/User/home"><img src="https://img.icons8.com/android/24/000000/home.png" /> </Link>
            <Link to=""><img src="https://img.icons8.com/ios-glyphs/30/000000/navigation-pane.png" /> </Link>
            <Link to=""><img src="https://img.icons8.com/ios-glyphs/30/000000/navigation-pane.png" /> </Link>
            <Link to="/User/profile"><img src="https://img.icons8.com/material-rounded/24/000000/cat-profile.png" /> </Link>
        </footer>

      </Router>
    );
  }
  
  export default AppRouter;
  