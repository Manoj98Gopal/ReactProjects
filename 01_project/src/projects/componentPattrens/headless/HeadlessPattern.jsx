import React, { useCallback, useState } from "react";
import DropDownSelect from "./DropDownSelect";
import RadioButton from "./RadioButton";
import PillToggle from "./PillToggle";

const options = ["React", "Next.js", "Vue", "Angular"];

const HeadlessPattern = () => {
  const [dropdownValue, setDropdownValue] = useState(null);
  const [radioValue, setRadioValue] = useState(null);
  const [pillValue, setPillValue] = useState(null);

  const handleChangeDropdown = useCallback((option) => {
    setDropdownValue(option);
  }, []);

  const handleChangeRadio = useCallback((option) => {
    setRadioValue(option);
  }, []);

  const handleChangePill = useCallback((option) => {
    setPillValue(option);
  }, []);

  return (
    <div className="space-y-8 pt-14">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Component Patterns
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Headless Component Pattern
        </h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          A headless component keeps behavior separate from UI. The hook owns
          state, events, and accessibility props. The component decides how that
          behavior should look.
        </p>
      </div>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-950">Problem</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Dropdowns, radios, and toggle groups often need the same behavior:
            selected value, option click handling, open or closed state, and ARIA
            attributes.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-950">Simple Example</h2>
          <pre className="mt-3 overflow-x-auto rounded bg-slate-950 p-4 text-xs leading-6 text-slate-100">
            <code>{`const {
  selected,
  getOptionProps
} = useSelect({ options, onChange });`}</code>
          </pre>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            The hook returns behavior helpers, not markup or styling.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-950">Resolve</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Move reusable behavior into `useSelect`. Then render that same
            behavior as a dropdown, radio list, pill toggle, or any other UI.
          </p>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-5">
          <h2 className="text-lg font-bold text-slate-950">Why It Helps</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
            <li>One behavior implementation can power many visual designs.</li>
            <li>UI components stay small because logic lives in the hook.</li>
            <li>Design changes do not require rewriting selection behavior.</li>
            <li>Accessibility props can be shared from one reliable place.</li>
          </ul>
        </div>

        <div className="rounded-lg border border-blue-100 bg-blue-50 p-5">
          <h2 className="text-lg font-bold text-slate-950">
            When To Use This Pattern
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
            <li>Use it when the same logic needs different UIs.</li>
            <li>Use it for reusable widgets like selects, tabs, menus, and modals.</li>
            <li>Use it when a design system needs flexible styling.</li>
            <li>Avoid it for one-off components where plain local state is simpler.</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-slate-950">Live Example</h2>
          <p className="mt-1 text-sm text-slate-600">
            All three examples below use the same `useSelect` hook, but each one
            renders a different interface.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-950">
              Dropdown Select
            </h3>
            <div className="mt-4">
              <DropDownSelect options={options} onChange={handleChangeDropdown} />
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Selected:{" "}
              <span className="font-semibold text-slate-950">
                {dropdownValue ?? "Nothing selected"}
              </span>
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-950">
              Radio Button
            </h3>
            <div className="mt-4">
              <RadioButton options={options} onChange={handleChangeRadio} />
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Selected:{" "}
              <span className="font-semibold text-slate-950">
                {radioValue ?? "Nothing selected"}
              </span>
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-950">
              Pill Toggle
            </h3>
            <div className="mt-4 overflow-x-auto pb-1">
              <PillToggle options={options} onChange={handleChangePill} />
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Selected:{" "}
              <span className="font-semibold text-slate-950">
                {pillValue ?? "Nothing selected"}
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeadlessPattern;
