import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { updateDisplay } from "../redux/actions";

const DrumPad = ({ id, name, updateDisplay, audio }) => {
  const audioRef = useRef(null);

  const playSound = () => {
    audioRef.current.play();
    updateDisplay(name);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  const handleKeyPress = (e) => {
    if (e.key.toUpperCase() === id) {
      playSound();
    }
  };

  return (
    <button className="drum-pad btn btn-secondary" id={id} onClick={playSound}>
      {id}
      <audio ref={audioRef} src={audio} className="clip" id={id} />
    </button>
  );
};

const mapStateToProps = (state, ownProps) => ({
  audio: state[ownProps.id]
});

const mapDispatchToProps = {
  updateDisplay
};

export default connect(mapStateToProps, mapDispatchToProps)(DrumPad);
