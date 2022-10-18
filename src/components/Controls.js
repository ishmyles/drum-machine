import { Component } from "react";
import "../assets/styles/Controls.css";

class Controls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="controls">
        <div id="volume"></div>
        <div id="screen"></div>
      </div>
    );
  }
}

export default Controls;
