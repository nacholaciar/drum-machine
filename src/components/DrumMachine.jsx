import React from "react";
import Display from "./Display";
import DrumPad from "./DrumPad";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DrumMachine.css";

const keyNames = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open-HH",
  Z: "Kick-n'-Hat",
  X: "Kick",
  C: "Closed-HH"
};

const DrumMachine = (props) => {
  const { display } = props;

  return (
    <div id="drum-machine" className="container mt-5">
      <div className="radio bg-dark p-4 rounded">
        <Display text={display} />
        <div className="grid">
          {Object.entries(keyNames).map(([letter, name], index) => (
            <div className="p-2" key={index}>
              <DrumPad id={letter} name={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  display: state.display
});

export default connect(mapStateToProps)(DrumMachine);
