import { Fragment, useCallback, useEffect, useState, useRef } from "react";
import { Silver } from "react-dial-knob";
import "../assets/styles/Controls.css";

function Controls({ volume, setVolume, sound }) {
  const prevVolume = useRef();
  const prevVolNum = prevVolume.current;
  const volumeBars = Array(volume).fill("");

  const [displayVolume, setDisplayVolume] = useState(null);

  const showVolume = useCallback(() => {
    setDisplayVolume(true);
    setTimeout(() => {
      setDisplayVolume(false);
    }, 3000);
  }, [setDisplayVolume]);

  useEffect(() => {
    prevVolume.current = volume;
  });

  useEffect(() => {
    if (prevVolNum !== volume) showVolume();
  }, [showVolume, prevVolNum, volume]);

  return (
    <div id="controls">
      <div id="volume">
        <Silver
          diameter={70}
          min={0}
          max={10}
          step={1}
          value={volume}
          onValueChange={setVolume}
        />
        <p className="text-black text-uppercase text-xs">Volume</p>
      </div>
      <div id="make-model">
        <div id="brand">
          <h1 id="brand-name" className="text-black text-center">
            <span className="brand-logo-one">Beat</span>
            <span className="brand-logo-two text-uppercase text-white logo-box">
              Box
            </span>
          </h1>
        </div>
        <div id="screen-border">
          <div id="screen">
            <p id="model-name" className="text-white text-center text-sm">
              DM-1200-A
            </p>
            <div id="display">
              <div id="volume-indicator">
                {displayVolume && (
                  <Fragment>
                    <p
                      id="volume-led-label"
                      className="text-digital text-uppercase"
                    >
                      Volume:
                    </p>
                    <div id="volume-bars">
                      {volume ? (
                        volumeBars.map((elem, i) => (
                          <div className="volume-bar" key={i}></div>
                        ))
                      ) : (
                        <span className="text-digital text-uppercase">
                          Muted
                        </span>
                      )}
                    </div>
                  </Fragment>
                )}
              </div>
              <p
                id="sound-played"
                className="text-digital text-uppercase text-center"
              >
                {sound}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controls;
