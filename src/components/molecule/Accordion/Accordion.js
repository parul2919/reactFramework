import React from "react";
import AccordionProp from "./AccordionProp";
import accordionMockData from "../../../mockApi/accordionMockData";

export default function App() {
  return (
    <AccordionProp>
      <AccordionProp.Title>LogRocket FAQ</AccordionProp.Title>
      <AccordionProp.Wrapper>
        {accordionMockData.map((item) => (
          <AccordionProp.Item key={item.id}>
            <AccordionProp.ItemHeader>{item.header}</AccordionProp.ItemHeader>
            <AccordionProp.Body>{item.body}</AccordionProp.Body>
          </AccordionProp.Item>
        ))}
      </AccordionProp.Wrapper>
    </AccordionProp>
  );
}
