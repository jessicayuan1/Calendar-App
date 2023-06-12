import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import TemplateGroup from "./template-group";
import data from "./data.jsx";

/**
 * Left Bar Templates Component
 * @component
 * @returns [{div}] [description]
 */
export default function Templates() {
  const [sampleData, setSampleData] = useState(data);

  return (
    <>
      <InputGroup className="mb-3 text-center">
        <Form.Control
          placeholder="Search for Template"
          aria-label="Search for Template"
          aria-describedby="template-search"
        />
      </InputGroup>
      <TemplateGroup data={sampleData} />
    </>
  );
}
