import React, { useState, useEffect } from "react";
import { Stack } from "react-bootstrap";
import { tickerOptions } from "../../context/DateOptions.jsx";


export default function TimeAxis(props) {
  const [timezone] = useState({
    EST: -5,
    PST: -8,
  });
  const [buttonBool, setButtonBool] = useState(false);
  const [isAmPm, setIsAmPm] = useState(true);

  const twentyFourHourClock = (time) => {
    if (time < 0) {
      return 24 + time;
    } else {
      return time;
    }
  };
  const handleClockTime = (time) => {
    if (isAmPm) {
      const newTime = twentyFourHourClock(time);
      if (newTime === 0) {
        return "12 AM";
      } else if (newTime === 12) {
        return "12 PM";
      } else if (newTime < 12) {
        return newTime.toString() + " AM";
      } else {
        return (newTime - 12).toString() + " PM";
      }
    } else {
      return twentyFourHourClock(time).toString() + ":00";
    }
  };

  const handleTimezone = () => {
    setButtonBool(!buttonBool);
  };

  const handleClockType = () => {
    setIsAmPm(!isAmPm);
  };

  var [date,setDate] = useState(new Date());
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() { 
      clearInterval(timer) 
    }
  });

  return (
    <>
    <Stack gap={0}>
      {[...Array(props.hours)].map((el, index1) => (
        <div key={index1} className="w-100 h-100">
          <p className="p-2 position-relative top-0 start-100 translate-middle font-r text-blue-spun-pearl">
            {buttonBool === true
              ? handleClockTime(index1 + timezone["EST"]) 
              : handleClockTime(index1)}
          </p>
        </div>
      ))}
      {/* <button onClick={handleTimezone}>Timezone</button>
      <button onClick={handleClockType}>AM/PM or 24 hour</button> */}
    </Stack> 
    </>
  );
}
