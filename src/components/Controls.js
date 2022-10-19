// import { useState } from "react";
import { Silver } from "react-dial-knob";
import "../assets/styles/Controls.css";

function Controls(props) {
  return (
    <div id="controls">
      <div id="volume">
        <Silver
          diameter={70}
          min={0}
          max={10}
          step={1}
          value={props.volume}
          onValueChange={props.setVolume}
        />
        <p>Volume</p>
      </div>
      <div id="make-model">
        <div id="brand">
          <p className="text-white text-center">BRAND</p>
        </div>
        <div id="screen-border">
          <div id="screen">
            <p className="text-white text-center">Model Name</p>
            <div id="display"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controls;
