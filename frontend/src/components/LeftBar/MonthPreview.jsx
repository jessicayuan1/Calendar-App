import React, { useState } from "react";
import Calendar from "react-calendar";

export function MonthPreview() {
  const [, setDate] = useState(new Date());
  return (
    <>
      <Calendar onChange={setDate}></Calendar>
    </>
  );
}
