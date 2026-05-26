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
    <div className="space-y-8 pt-14">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Component Patterns
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Compound Component Pattern
        </h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Compound components are multiple small components that work together
          like one component. The parent manages shared state, and the child
          components use that state without passing props through every level.
        </p>
      </div>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-950">Problem</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Some UI parts must work together. In an accordion, the trigger opens
            a panel, and the panel needs to know if it should be visible.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-950">Simple Example</h2>
          <pre className="mt-3 overflow-x-auto rounded bg-slate-950 p-4 text-xs leading-6 text-slate-100">
            <code>{`<Accordion>
  <Accordion.Item>
    <Accordion.Trigger id={1}>
      Question
    </Accordion.Trigger>
    <Accordion.Panel id={1}>
      Answer
    </Accordion.Panel>
  </Accordion.Item>
</Accordion>`}</code>
          </pre>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-950">Resolve</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            The parent `Accordion` stores which item is open. `Trigger` changes
            that value. `Panel` reads that value and shows only when its id is
            active.
          </p>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-5">
          <h2 className="text-lg font-bold text-slate-950">Advantages</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
            <li>Cleaner JSX because related parts are grouped together.</li>
            <li>Less prop drilling because shared state comes from context.</li>
            <li>Flexible layout because users can compose the child components.</li>
            <li>Reusable API for accordions, tabs, menus, modals, and forms.</li>
          </ul>
        </div>

        <div className="rounded-lg border border-blue-100 bg-blue-50 p-5">
          <h2 className="text-lg font-bold text-slate-950">
            Where To Use This Pattern
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
            <li>Accordion: trigger and panel share open or closed state.</li>
            <li>Tabs: tab buttons and tab panels share active tab state.</li>
            <li>Dropdown: button, menu, and menu items share open state.</li>
            <li>Modal: trigger, content, close button, and overlay work together.</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-slate-950">Live Example</h2>
          <p className="mt-1 text-sm text-slate-600">
            Both accordions below use the same compound API.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-slate-950">
              Pattern Explanation
            </h3>
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
                The parent component provides shared state using context. Child
                components like Trigger and Panel read that shared state and
                update themselves.
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Trigger id={3}>
                What are the benefits of using the compound pattern?
              </Accordion.Trigger>
              <Accordion.Panel id={3}>
                It makes related components easier to read, easier to reuse, and
                easier to customize without passing many props manually.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>

          <div>
            <h3 className="mb-3 font-semibold text-slate-950">
              React Questions
            </h3>
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
      </section>
    </div>
  );
};

export default CompoundPattern;
