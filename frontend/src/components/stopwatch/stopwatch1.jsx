import React from "react";
import { Timer } from "./timer";

export function Stopwatch(props) {
  return (
    <div>
      <div
        xs={12}
        sm={8}
        lg={6}
        className="mx-auto"
        style={{
          backgroundColor: "#004678",
        }}
      ></div>
      <Timer
        key={props.stopwatch.id}
        stopwatch={props.stopwatch}
        onNameChange={props.onNameChange}
        onDurationChange={props.onDurationChange}
        onDatetimeIntervalsChange={props.onDatetimeIntervalsChange}
      />
    </div>
  );
}
