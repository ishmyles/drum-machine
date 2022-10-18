import { Component } from "react";
import Pad from "./Pad.js";
import "../assets/styles/Pads.css";

class Pads extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div id="pads">
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
      </div>
    );
  }
}

export default Pads;
