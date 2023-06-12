import React, { useState } from "react";
import { Stopwatch } from "../../components/stopwatch/stopwatch1";
// import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
// import { Navbar } from "../../components/navbar";

export default function Stopwatches() {
  const [stopwatchList, setStopwatchList] = useState([
    { id: 1, task: "", duration: 0, durationSet: [], datetimeIntervalSet: [] },
  ]);
  // const [uniqueId, setUniqueId] = useState(2);

  // Event Handlers

  // const handleAdd = () => {
  //   setStopwatchList([
  //     ...stopwatchList,
  //     {
  //       id: uniqueId,
  //       task: "",
  //       duration: 0,
  //       durationSet: [],
  //       datetimeIntervalSet: [],
  //     },
  //   ]);
  //   setUniqueId(uniqueId + 1);
  // };

  //  const handleSendToDB  = () => {
  //   stopwatchList.forEach((stopwatch) => {
  //     axios
  //       .post("http://127.0.0.1:8000/api/stopwatch/", stopwatch)
  //       .then((response) => {
  //         console.log(stopwatch)
  //         console.log(response)
  //         return response
  //       })
  //   }).then(
  //   )
  // }

  // State change handlers

  const handleNameChange = (counterId, task) => {
    const newStopwatchList = stopwatchList.map((c) => {
      if (c.id === counterId) {
        c.task = task;
      }
      return c;
    });
    setStopwatchList(newStopwatchList);
  };

  const handleDurationChange = (counterId, duration) => {
    const newStopwatchList = stopwatchList.map((c) => {
      if (c.id === counterId) {
        c.duration = duration;
      }
      return c;
    });
    setStopwatchList(newStopwatchList);
  };

  const handleDatetimeIntervalSetChange = (counterId, datetimeIntervalSet) => {
    const newStopwatchList = stopwatchList.map((c) => {
      if (c.id === counterId) {
        c.datetimeIntervalSet = datetimeIntervalSet;
      }
      return c;
    });
    setStopwatchList(newStopwatchList);
  };

  return (
    <Container>
      <Col>
        <Row>
          {stopwatchList.map((stopwatch) => (
            <Stopwatch
              key={stopwatch.id}
              stopwatch={stopwatch}
              onNameChange={handleNameChange}
              onDurationChange={handleDurationChange}
              onDatetimeIntervalsChange={handleDatetimeIntervalSetChange}
            />
          ))}
          {/* <button onClick={handleSendToDB}>Send to Database</button> */}
        </Row>
      </Col>
    </Container>
  );
}
