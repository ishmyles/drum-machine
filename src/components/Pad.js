import { useEffect, useRef } from "react";
import "../assets/styles/Pad.css";

function Pad(props) {
  const { id, key, keycode, soundUrl, soundName } = props.sound;
  const { handleClick } = props;
  const audio = useRef(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === keycode) handleClick(audio.current, soundName);
    };

    document.body.addEventListener("keydown", handleKeyPress);

    return () => {
      document.body.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleClick, audio, soundName, keycode]);

  return (
    <div
      id={id}
      className="drum-pad"
      onClick={() => handleClick(audio.current, soundName)}
    >
      <h2 className="text-uppercase">{key}</h2>
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
