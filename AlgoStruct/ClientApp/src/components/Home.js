import React from "react";
import { Container } from "reactstrap";
import Sidebar from "./Sidebar/Sidebar";
import "./Home.scss";
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";

const Home = () => {
  return (
    <>
      <Sidebar />
      <Container id="main-content">
        <h1>AlgoStruct</h1>
        <h5>a Data Structures & Algorithms visualization tool</h5>
        <SortingVisualizer></SortingVisualizer>
      </Container>
    </>
  );
};

export default Home;
