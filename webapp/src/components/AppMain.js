import React, { Component } from "react";
import MapView from "./MapView";
import ListView from "./ListView";

class AppMain extends Component {
  state = {
    showMap: true
  };

  handleToggleView = () => {
    this.setState(previousState => {
      return { showMap: !previousState.showMap };
    });
  };

  render() {
    return (
      <main>
        <a className="toggleViews" onClick={this.handleToggleView}>
          toggle
        </a>
        {this.state.showMap ? <MapView /> : <ListView />}
      </main>
    );
  }
}

export default AppMain;
