import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import { MonthPreview } from "./MonthPreview";
import Create from "./components/create";
import Tags from "./components/tags";
import Templates from "./components/templates";

export default function LeftBar() {
  return (
    <Stack gap={1}>
      <MonthPreview />
      <Tags />
      <Templates />
      <Create />
    </Stack>
  );
}
