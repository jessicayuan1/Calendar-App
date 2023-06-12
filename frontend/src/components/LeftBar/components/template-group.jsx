import React, { useState } from "react";
// import Template from "./template";
import { Button, Stack } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";

export default function TemplateGroup({ data }) {
  const [open, setOpen] = useState(data.map(() => false));

  function updateOpenArray(index) {
    open[index] = !open[index];
    setOpen([...open]);
  }

  return (
    <div>
      {data.map((parent, index) => (
        <Stack key={index}>
          {/* Folders */}
          {parent.isFolder && (
            <Button
              className="px-0 rounded-0"
              style={{
                backgroundColor: "#505050",
                boxShadow: "none",
                outline: "none",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => updateOpenArray(index)}
              draggable="true"
            >
              {parent.name}
            </Button>
          )}
          {/* Events */}
          {!parent.isFolder && (
            <div
              className="px-0 rounded-0"
              style={{
                backgroundColor: "#505050",
                boxShadow: "none",
                outline: "none",
                border: "none",
                cursor: "pointer",
              }}
              // draggable="true"
            >
              {parent.name}
            </div>
          )}
          {/* Nested Data */}
          {parent.children && (
            <Collapse in={open[index]}>
              <div>
                <TemplateGroup data={parent.children}></TemplateGroup>
              </div>
            </Collapse>
          )}
        </Stack>
      ))}
    </div>
  );
}
