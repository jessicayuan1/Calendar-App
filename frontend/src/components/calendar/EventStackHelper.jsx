import React, { useState } from "react";
import { Col } from "react-bootstrap";
import eventData from "../LeftBar/components/eventData.jsx";
import EventStack from "./EventStack.jsx";

export default function EventStackHelper(props) {
  const [sampleEventData, setSampleEventData] = useState(eventData);
  return Object.keys(props.dates).map((day) => (
    <Col key={day}>
      <EventStack
        events={sampleEventData["events"].filter(
          (event) =>
            event["start"].split("T")[0] === props.dates[day].split("T")[0]
        )}
        day={day}
        hours={sampleEventData["hours"]}
      />
    </Col>
  ));
}
