import Pad from "./Pad.js";
import "../assets/styles/Pads.css";

function Pads({ sounds, handleClick }) {
  return (
    <div id="pads">
      {sounds.map((sound) => (
        <Pad sound={sound} handleClick={handleClick} key={sound.key} />
      ))}
    </div>
  );
}

export default Pads;
