import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

function DayAxis(props) {
  const [events] = useState([]);
  const [displayDimensions, setDisplayDimensions] = useState({
    hours: 24,
    days: [0, 1, 2, 3, 4, 5, 6, 7],
    day: ["", "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
  });

  // const handleClick = (index1, index2) => {
  //   window.alert("Some sort of event editing" + index1 + index2);
  // };

  return (
    <>
      {displayDimensions["days"].map((el, index) => (
        <Col className="g-0 p-2 text-center" key={index}>
          {index === 0 && (
            <div>
              <p
                className="m-0 p-0"
                style={{
                  color: "#F2F2F7",
                  fontSize: "16px",
                }}
              >
                {" "}
              </p>
              <p
                className="m-0 p-0 font-r"
                style={{ color: "#F2F2F7", fontSize: "28px" }}
              >
                {" "}
              </p>
              {/* <form>
              <input type="text" />
              <button>Add Event</button>
              </form> */}
            </div>
          )}
          {index !== 0 && (
            <div>
              <p
                className="m-0 p-0"
                style={{
                  color: "#F2F2F7",
                  fontSize: "16px",
                }}
              >
                {displayDimensions.day[index]}
              </p>
              <p
                className={
                  new Date().getDate() ===
                  new Date(props.dates[index - 1]).getDate()
                    ? "m-auto p-0 font-r"
                    : "m-0 p-0 font-r"
                }
                style={{
                  color: "#F2F2F7",
                  fontSize: "28px",
                  background:
                    new Date().getDate() ===
                    new Date(props.dates[index - 1]).getDate()
                      ? "#048DFA"
                      : "",
                  borderRadius:
                    new Date().getDate() ===
                    new Date(props.dates[index - 1]).getDate()
                      ? "50%"
                      : "",
                  width:
                    new Date().getDate() ===
                    new Date(props.dates[index - 1]).getDate()
                      ? "50px"
                      : "",
                  height:
                    new Date().getDate() ===
                    new Date(props.dates[index - 1]).getDate()
                      ? "50px"
                      : "",
                  lineHeight: "50px",
                }}
              >
                {new Date(props.dates[index - 1]).getDate()}
              </p>
              {[...Array(events)].map((el, index) => (
                <Row key={index}>
                  <p className="m-0 p-0" key={index}>
                    {events[index]}
                  </p>
                </Row>
              ))}
              {/* <form>
          <input type="text" />
          <button>Add Event</button>
        </form> */}
            </div>
          )}
        </Col>
      ))}
    </>
  );
}

export default DayAxis;
