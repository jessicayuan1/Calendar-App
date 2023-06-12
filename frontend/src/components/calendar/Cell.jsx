import React from "react";

export default function Cell(props) {
  const handleClick = (hour, day) => {
    window.alert("Some sort of event creation" + hour + day);
  };

  return (
    <div
      className="z-1 w-100 h-100"
      onClick={() => {
        handleClick(props.hour, props.day);
      }}
      style={{
        borderColor: "#202020",
        borderStyle: "solid",
      }}
    ></div>
  );
}
