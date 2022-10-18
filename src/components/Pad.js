import { Component } from "react";
import "../assets/styles/Pad.css";

class Pad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="drum-pad">
        <h1>Pad</h1>
      </div>
    );
  }
}

export default Pad;
