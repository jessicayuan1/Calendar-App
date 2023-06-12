import React from "react";
import { Button } from "react-bootstrap";

export function StopwatchButton(props) {
  return (
    <Button
      className="w-100 py-2 rounded-pill"
      style={{
        backgroundColor: "#58b9ff",
        cursor: "pointer",
        fontWeight: "bold",
      }}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.title}
    </Button>
  );
}
