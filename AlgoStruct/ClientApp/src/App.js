import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Register } from "./components/Register";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />{" "}
        <Route exact path="/" component={Algorithms} />
        <Route exact path="/" component={DataStructures} />
        <Route exact path="/" component={Login} />
        <Route exact path="/" component={Logout} />
        <Route exact path="/" component={Register} />
      </Layout>
    );
  }
}
