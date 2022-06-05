import React, { Component } from "react";
import Sidebar from "./Sidebar/Sidebar";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <>
        <Sidebar />
        <div id="main-content">
          <h1>AlgoStruct</h1>
          <h4>a Data Structures & Algorithms</h4>
          <h2>Visualizer</h2>
        </div>
      </>
    );
  }
}
