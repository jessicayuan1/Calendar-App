import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { formatTime } from "../../utils/utils";
import { StopwatchButton } from "./components/button";
import useTimer from "../../hooks/use-timer";
import options from "../../context/DateOptions.jsx";

export function Timer(props) {
  const timer = useTimer(
    props.stopwatch,
    props.onDurationChange,
    props.onDatetimeIntervalsChange
  );

  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <h1
            style={{
              fontSize: "10em",
            }}
          >
            {formatTime(props.stopwatch.duration)}
          </h1>
        </Col>
      </Row>
      <Row className="my-2">
        <Col>
          <Row>
            <Col xs={4} sm={3} lg={2}>
              {!timer.isActive && !timer.isPaused && (
                <StopwatchButton onClick={timer.handleStart} title="Start" />
              )}
              {timer.isActive && timer.isPaused && (
                <StopwatchButton onClick={timer.handleResume} title="Resume" />
              )}
              {timer.isActive && !timer.isPaused && (
                <StopwatchButton onClick={timer.handlePause} title="Pause" />
              )}
            </Col>
            <Col xs={4} sm={3} lg={2}>
              <StopwatchButton
                onClick={() => {
                  timer.handlePause();
                  timer.handleReset(false);
                  timer.handleStart();
                }}
                title="Split"
                disabled={!timer.isActive}
              />
            </Col>
            <Col xs={4} sm={3} lg={2}>
              <StopwatchButton
                onClick={timer.handleReset}
                title="Reset"
                disabled={!timer.isPaused}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>Task</Col>
        <Col>Duration</Col>
        <Col>
          Date/Time
          {props.stopwatch.datetimeIntervalSet.map((datetime) => (
            <Row>
              <Col>
                {datetime.start &&
                  datetime.start.toLocaleString("en-US", options)}
                <br />
                {datetime.end &&
                  datetime.end.toLocaleString("en-US", options)}
              </Col>
            </Row>
          ))}
        </Col>
        <Col>Tags</Col>
      </Row>
    </Container>
  );
}
