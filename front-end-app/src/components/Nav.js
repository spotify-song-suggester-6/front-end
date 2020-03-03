import React from "react";

function Nav() {
  return (
    <nav>
      <ul>
        <a href="./protected"> Home </a>
        <a href="./search"> Search </a>
        {/* Might make into overlay component? */}
        <a href="./about"> About </a>
        {/* Link to Jonah's about page */}
      </ul>
    </nav>
  );
}
export default Nav;
