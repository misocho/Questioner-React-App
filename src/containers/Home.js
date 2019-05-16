import React from "react";
import Navigation from "../components/Navigation";
import Card from "../components/Card";

import "../css/home.css";

const Home = () => {
  return (
    <div className="page-body">

      <div className="card-container" id="card-list">
        <Card />
       </div>
    </div>
  );
};

export default Home;
