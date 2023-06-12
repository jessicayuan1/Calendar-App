import React from "react";
import { Row, Button } from "react-bootstrap";

export function RightBar() {
  return (
    <Row>
      <Button
        className="px-0 rounded-0"
        href={`/stopwatches`}
        style={{
          backgroundColor: "#505050",
          boxShadow: "none",
          outline: "none",
          border: "none",
        }}
      >
        Stopwatches
      </Button>
    </Row>
  );
}
