import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Authentication/Login";
import Logout from "./components/Authentication/Logout";
import Register from "./components/Authentication/Register";
import Algorithms from "./components/Algorithms/Algorithms";
import DataStructures from "./components/DataStructures/DataStructures";
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import "./custom.scss";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />{" "}
        <Route path="/sorting-visualizer" component={SortingVisualizer} />
        <Route path="/algorithms" component={Algorithms} />
        <Route path="/datastructures" component={DataStructures} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
      </Layout>
    );
  }
}
