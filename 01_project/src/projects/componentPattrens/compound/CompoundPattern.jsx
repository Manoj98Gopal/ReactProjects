import React from "react";
import Accordion from "./index";

const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a JavaScript library used for building user interfaces. It allows developers to create reusable components and efficiently update the UI using the Virtual DOM."
  },
  {
    id: 2,
    title: "What is Fiber Architecture?",
    content:
      "Fiber is React’s reconciliation engine introduced in React 16. It breaks rendering work into smaller units and allows React to pause, resume, prioritize, and reuse work for better performance."
  },
  {
    id: 3,
    title: "What is useEffect?",
    content:
      "useEffect is a React Hook used to handle side effects such as API calls, timers, subscriptions, and event listeners after React updates the DOM."
  },
  {
    id: 4,
    title: "What is Debouncing?",
    content:
      "Debouncing is a technique used to delay execution until a user stops performing an action for a specified time. It is commonly used in search inputs to reduce unnecessary API calls."
  },
  {
    id: 5,
    title: "What is a Custom Hook?",
    content:
      "A custom hook is a reusable JavaScript function that uses React Hooks internally. It helps share logic between components without duplicating code."
  }
];

const CompoundPattern = () => {
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold mb-4">Compound Pattern</h1>

      <div className="flex flex-row gap-12">
        <div className="flex-1">
          <Accordion>
            <Accordion.Item>
              <Accordion.Trigger id={1}>
                What is the compound pattern?
              </Accordion.Trigger>
              <Accordion.Panel id={1}>
                The compound pattern is a design pattern in React that allows
                you to create a set of related components that work together to
                manage state and behavior. It is often used to create complex UI
                components that have multiple parts, such as an accordion, tabs,
                or a dropdown menu.
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Trigger id={2}>
                How does the compound pattern work?
              </Accordion.Trigger>
              <Accordion.Panel id={2}>
                The compound pattern works by creating a parent component that
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Trigger id={3}>
                What are the benefits of using the compound pattern?
              </Accordion.Trigger>
              <Accordion.Panel id={3}>
                The compound pattern provides several benefits, including:
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="flex-1">
          <Accordion>
            {accordionData.map(({ id, title, content }) => (
              <Accordion.Item key={id}>
                <Accordion.Trigger id={id}>{title}</Accordion.Trigger>
                <Accordion.Panel id={id}>{content}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CompoundPattern;
