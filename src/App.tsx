import React, { Component } from "react";

import SnapsList from "./SnapsList";
import "./styles/App.css";

type AppState = {
  snaps:
}

class App extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      snaps: [],
    };
  }

  onLoadSnaps = (snaps) => this.setState(() => ({ snaps }));

  render() {
    const { snaps } = this.state;

    return (
      <div>
        <SnapsList snaps={snaps} onLoad={this.onLoadSnaps} />
      </div>
    );
  }
}

export default App;
