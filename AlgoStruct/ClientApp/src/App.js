import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import Login from "./components/Authentication/Login";
import Logout from "./components/Authentication/Logout";
import Register from "./components/Authentication/Register";
import Algorithms from "./components/Algorithms/Algorithms";
import DataStructures from "./components/DataStructures/DataStructures";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />{" "}
        <Route path="/algorithms" component={Algorithms} />
        <Route path="/datastructures" component={DataStructures} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
      </Layout>
    );
  }
}
