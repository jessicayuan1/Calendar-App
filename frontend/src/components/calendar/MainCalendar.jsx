// import axios from "axios";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import DayAxis from "./DayAxis";
import TimeAxis from "./TimeAxis.jsx";
import EventStackHelper from "./EventStackHelper.jsx";
import Temp from "./Temp.jsx";

export default function MainCalendar() {
  var dates1 = {
    0: new Date(),
    1: new Date(),
    2: new Date(),
    3: new Date(),
    4: new Date(),
    5: new Date(),
    6: new Date(),
  };

  var today = new Date();
  var dayOfToday = today.getDay();

  while (dayOfToday >= 0) {
    dates1[dayOfToday] = today.toISOString();
    today.setDate(today.getDate() - 1);
    dayOfToday--;
  }

  var today = new Date();
  var dayOfToday = today.getDay();
  while (dayOfToday <= 6) {
    dates1[dayOfToday] = today.toISOString();
    today.setDate(today.getDate() + 1);
    dayOfToday++;
  }

  const [
    dates,
    // setDates
  ] = useState(dates1);

  const [requestParams, setRequestParams] = useState({
    days: 7,
    hours: 24,
  });

  return (
    <div className="bg-grey-cinder-2">
      <Row className="g-0">
        <DayAxis dates={dates} />
      </Row>
      <Row className="g-0">
        <Col>
          <Temp />
        </Col>
        <Col>
          <TimeAxis hours={requestParams["hours"]} />
        </Col>
        <EventStackHelper dates={dates} />
      </Row>
    </div>
  );
}
