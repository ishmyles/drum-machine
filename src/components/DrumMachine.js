import { useState } from "react";
import Controls from "./Controls.js";
import Pads from "./Pads.js";
import "../assets/styles/DrumMachine.css";

function DrumMachine() {
  // const soundData = [];
  const [currentVolume, setCurrentVolume] = useState(0);
  // const [currentSound, setCurrentSound] = useState("");

  return (
    <div id="drum-machine">
      <Controls volume={currentVolume} setVolume={setCurrentVolume} />
      <Pads />
    </div>
  );
}

export default DrumMachine;
