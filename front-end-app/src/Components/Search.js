import React from "react";
import Iframe from "react-iframe";
import Nav from "./Nav";

function Search() {
  return (
    <div>
      <Nav />
      <Iframe url="https://public.tableau.com/profile/evidence.n#!/vizhome/SpotifySongsVisualizationDashboard/SpotifySongStats" />
      {/* Evidence's table doesnt support iframes */}
    </div>
  );
}
export default Search;
