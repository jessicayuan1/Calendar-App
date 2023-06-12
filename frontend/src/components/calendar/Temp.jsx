import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { tickerOptions } from "../../context/DateOptions.jsx";


export default function Temp() {
  const [datetime, setDatetime] = useState(new Date());

/**
 * Calculates percentage of day
 * @component
 * @returns [{div}] [description]
 */
  const calcTimePercentage = () => {
    const hoursInADay = 23;
    return (datetime.getHours()/(hoursInADay + 1)*100);
  }
  const [hourTicker, setHourTicker] = useState(calcTimePercentage());


  useEffect(() => {
    const msPerMinute = 60*1000; 
    const hourTickerRefreshFreq = 4;
    const msPerHour = 60*msPerMinute;

    let hourTickerID = setInterval( () => setHourTicker(new Date()), ((24/hourTickerRefreshFreq)*msPerHour) );

    let now = new Date();

    let refreshAM = new Date();
    refreshAM.setHours(6, 0, 0);

    let refreshPM = new Date();
    refreshPM.setHours(18, 0, 0)

    let refreshDay = new Date()
    refreshDay.setHours(24, 0, 0);
    console.log(refreshDay)

    let timeDiff;
    if (now < refreshAM) { 
      timeDiff = refreshAM - now
    } else if ( (now < refreshPM) ){
      timeDiff = refreshPM - now
    } else {
      timeDiff = refreshDay - now
    }

    setTimeout(() => {
      hourTickerID = setInterval( () => setHourTicker(new Date()), ((24 / hourTickerRefreshFreq) * msPerHour) )
      (setHourTicker(new Date()));
    }, 
     timeDiff
    );


    let timerID;
    setTimeout(() => {
      timerID = setInterval(() => setDatetime(new Date()), msPerMinute);
      setDatetime(new Date());
    },
      (60 - datetime.getSeconds()) * 1000
    ); 
    
    
    return function cleanup() { 
      clearInterval(timerID); 
      clearInterval(hourTickerID); 
    }
  });

  const nearest = 50;
  const roundPercent = (percentage) => {  
    return Math.round(percentage / nearest)*nearest;
  }

  return (
    <p className={"p-2 position-relative top-"+roundPercent(hourTicker)+" start-100 translate-middle font-r text-yellow-starship"}> {datetime.toLocaleTimeString("en-US", tickerOptions)} </p>
    )
    
}
