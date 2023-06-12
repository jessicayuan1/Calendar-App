import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import Cell from "./Cell.jsx";
import Event from "./Event.jsx";

export default function EventStack(props) {
  const hasEvent = (events, hour) => {
    return (
      events.filter((event) => new Date(event.start).getHours() === hour)
        .length !== 0
    );
  };
  return (
    
    <Stack gap={0} className="h-100">
      {[...Array(props.hours)].map((el, hour) => (
        <div className="h-100" key={hour}>
          
          {hasEvent(props.events, hour) && (
            <Event hour={hour} events={props.events}></Event>
          )}
          {!hasEvent(props.events, hour) && (
            <Cell hour={hour} day={props.day} />
          )}
        </div>
      ))}
            

    </Stack>
  );
}
