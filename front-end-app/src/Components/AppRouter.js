import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";


import Profile from './Profile';
import Home from './Home';


function AppRouter({id}) {
    return (
      <Router>
        <div>
          <Switch>
            {/* <Route path="" component={Spells} />
            <Route path="" component={Character} /> */}
            <Route path="/User/:id/home" component={Home} /> 
            <Route path="/User/:id/profile" component={Profile} />
          </Switch>
        </div>
        <footer className="theFooter">
            <NavLink to={`/User/${id}/home`}><img src="https://img.icons8.com/android/24/000000/home.png" /> </NavLink>
            <NavLink to=""><img src="https://img.icons8.com/ios-glyphs/30/000000/navigation-pane.png" /> </NavLink>
            <NavLink to=""><img src="https://img.icons8.com/ios-glyphs/30/000000/navigation-pane.png" /> </NavLink>
            <NavLink to={`/User/${id}/profile`}><img src="https://img.icons8.com/material-rounded/24/000000/cat-profile.png" /> </NavLink>
        </footer>

      </Router>
    );
  }
  
  export default AppRouter;
  