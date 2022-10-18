import { Component } from "react";
import Controls from "./Controls.js";
import Pads from "./Pads.js";
import "../assets/styles/DrumMachine.css";

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Data goes here
    };
  }
  render() {
    return (
      <div id="drum-machine">
        <Controls />
        <Pads />
      </div>
    );
  }
}

export default DrumMachine;
