import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Sidebar />
      <div id="main-content">
        <h1>AlgoStruct</h1>
        <h4>a Data Structures & Algorithms</h4>
        <h2>Visualizer tool</h2>
      </div>
    </>
  );
};

export default Home;
