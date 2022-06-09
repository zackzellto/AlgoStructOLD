import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Sidebar />
      <div id="main-content">
        <h1>AlgoStruct</h1>
        <h5>a visualization tool</h5>
        <h5>for Data Structures & Algorithms</h5>
      </div>
    </>
  );
};

export default Home;
