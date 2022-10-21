import { useEffect, useRef, useState } from "react";
import "../assets/styles/Pad.css";

function Pad(props) {
  const { id, key, keycode, soundUrl, soundName, color } = props.sound;
  const { handleClick } = props;
  const audio = useRef(null);

  const [activePad, setActivePad] = useState(false);

  const togglePad = () => {
    setActivePad(true);
    setTimeout(() => {
      setActivePad(false);
    }, 300);
  };

  const getPadColor = () => {
    let padClasses = `drum-pad pad-${color} `;
    return activePad ? (padClasses += "active-pad") : padClasses;
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === keycode) {
        togglePad();
        handleClick(audio.current, soundName);
      }
    };

    document.body.addEventListener("keydown", handleKeyPress);

    return () => {
      document.body.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleClick, audio, soundName, keycode]);

  return (
    <div
      id={id}
      className={getPadColor()}
      onClick={() => {
        togglePad();
        handleClick(audio.current, soundName);
      }}
    >
      <h2 className="text-key text-uppercase">{key}</h2>
      <audio
        id={key.toUpperCase()}
        className="clip"
        src={soundUrl}
        preload="auto"
        ref={audio}
      ></audio>
    </div>
  );
}

export default Pad;
