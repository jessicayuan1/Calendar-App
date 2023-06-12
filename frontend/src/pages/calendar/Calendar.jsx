import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainCalendar from "../../components/calendar/MainCalendar.jsx";
import LeftBar from "../../components/LeftBar/LeftBar.jsx";
import { RightBar } from "../../components/RightBar/RightBar.jsx";
// import { CalendarContext } from "../context/CalendarContext";

/**
 * Calendar Page Component
 * @component
 * @returns [{div}] [description]
 */
export default function Calendar() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Nav Bar Placeholder Text</h1>
        </Col>
      </Row>
      <Row>
        <Col xs="2">
          <LeftBar />
        </Col>
        <Col>
          <MainCalendar />
        </Col>
        <Col xs="1">
          <RightBar />
        </Col>
      </Row>
    </Container>
  );
}
