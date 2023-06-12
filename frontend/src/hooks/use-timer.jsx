// TODO: fix dynamic styling issue with resume button
import { useState, useRef } from "react";

const updateDatetimeInterval = (
  stopwatch,
  onDatetimeIntervalsChange,
  input
) => {
  var d = new Date();
  if (input === "start" || input === "resume") {
    onDatetimeIntervalsChange(stopwatch.id, [
      ...stopwatch.datetimeIntervalSet,
      { start: d },
    ]);
  } else if (input === "pause") {
    var newDatetimeIntervals = [...stopwatch.datetimeIntervalSet];
    newDatetimeIntervals[newDatetimeIntervals.length - 1].end = d;
    onDatetimeIntervalsChange(stopwatch.id, newDatetimeIntervals);
  }
};

const useTimer = (stopwatch, onDurationUpdate, onDatetimeIntervalsChange) => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    updateDatetimeInterval(stopwatch, onDatetimeIntervalsChange, "start");
    setIsActive(true);
    setIsPaused(false);
    countRef.current = setInterval(() => {
      onDurationUpdate(stopwatch.id, stopwatch.duration + 1);
    }, 1000);
  };

  const handlePause = () => {
    updateDatetimeInterval(stopwatch, onDatetimeIntervalsChange, "pause");
    clearInterval(countRef.current);
    setIsPaused(true);
  };

  const handleResume = () => {
    updateDatetimeInterval(stopwatch, onDatetimeIntervalsChange, "resume");
    setIsPaused(false);
    countRef.current = setInterval(() => {
      onDurationUpdate(stopwatch.id, stopwatch.duration + 1);
    }, 1000);
  };

  const handleReset = (hardReset = true) => {
    if (hardReset) {
      onDatetimeIntervalsChange(stopwatch.id, []);
    }
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    onDurationUpdate(stopwatch.id, 0);
  };

  // const handleSplit

  return {
    isActive,
    isPaused,
    countRef,
    setIsActive,
    setIsPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  };
};

export default useTimer;
