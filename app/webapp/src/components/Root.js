import React, { Component } from "react";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import AppFooter from "./AppFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Root.scss";

class Root extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppMain />
        <AppFooter />
      </div>
    );
  }
}

export default Root;
