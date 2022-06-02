import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <div>
          <h3 className="sidebar-header">Contents</h3>
        </div>
        <ul>
          <li>
            <button href="#about">About AlgoStruct </button>
          </li>
          <li>
            <button href="#algorithms">Algorithms</button>
          </li>
          <li>
            <button href="#data-structures">Data Structures</button>
          </li>
          <li>
            <button href="#learning">Learning</button>
          </li>
          <li>
            <button href="contact">Contact</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
