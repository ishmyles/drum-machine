import { useState } from "react";
import Controls from "./Controls.js";
import Pads from "./Pads.js";
import "../assets/styles/DrumMachine.css";

const soundData = [
  {
    id: "#heater-1",
    key: "q",
    keycode: 81,
    soundName: "Heater 1",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    id: "#heater-2",
    key: "w",
    keycode: 87,
    soundName: "Heater 2",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    id: "#heater-3",
    key: "e",
    keycode: 69,
    soundName: "Heater 3",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    id: "#heater-4",
    key: "a",
    keycode: 65,
    soundName: "Heater 4",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    id: "#clap",
    key: "s",
    keycode: 83,
    soundName: "Clap",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    id: "#open-hh",
    key: "d",
    keycode: 68,
    soundName: "Open HH",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    id: "#kick-n-hat",
    key: "z",
    keycode: 90,
    soundName: "Kick n Hat",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    id: "#kick",
    key: "x",
    keycode: 88,
    soundName: "Kick",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    id: "#closed-hh",
    key: "c",
    keycode: 67,
    soundName: "Closed HH",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function DrumMachine() {
  const [currentVolume, setCurrentVolume] = useState(0);
  const [currentSound, setCurrentSound] = useState("");

  const playSound = (audio, soundDesc) => {
    setCurrentSound(soundDesc);
    let sound = audio;
    sound.currentTime = 0;
    sound.volume = currentVolume / 10;
    sound.play();
  };

  return (
    <div id="drum-machine">
      <Controls
        volume={currentVolume}
        setVolume={setCurrentVolume}
        sound={currentSound}
      />
      <Pads sounds={soundData} handleClick={playSound} />
    </div>
  );
}

export default DrumMachine;
