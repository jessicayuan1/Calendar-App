import React from "react";
import Cell from "./Cell.jsx";

export default function Event(props) {
  const duration = (hour) => {
    if (!props.events) return 0;
    return (
      new Date(
        props.events.filter(
          (event) => new Date(event.start).getHours() === hour
        )[0]["end"]
      ).getHours() -
      new Date(
        props.events.filter(
          (event) => new Date(event.start).getHours() === hour
        )[0]["start"]
      ).getHours()
    );
  };

  return (
    <div className="h-100">
      <div className="position-relative d-flex h-100">
        <div
          className={
            "z-2 " +
            (duration(props.hour) === 1
              ? "rounded-4 h-85"
              : "rounded-top-4 h-100") +
            " position-absolute bg-blue-whale w-90"
          }
        >
          <p className="p-2 text-blue-columbia">
            {
              props.events.filter(
                (event) => new Date(event.start).getHours() === props.hour
              )[0]["title"]
            }
          </p>
        </div>
        <Cell hour={props.hour} day={props.day} />
      </div>
      {duration(props.hour) > 1 && (
        <>
          {[...Array(duration(props.hour) - 2)].map((el, index) => (
            <div key={index} className="position-relative d-flex h-100">
              <div className="z-2 position-absolute h-100 bg-blue-whale w-90">
                <p className="p-2 text-blue-columbia"></p>
              </div>
              <Cell hour={props.hour} day={props.day} />
            </div>
          ))}
          <div className="position-relative d-flex h-100">
            <div className="z-2 rounded-bottom-4 position-absolute bg-blue-whale w-90 h-85">
              <p className="p-2 text-blue-columbia"></p>
            </div>
            <Cell hour={props.hour} day={props.day} />
          </div>
        </>
      )}
    </div>
  );
}
