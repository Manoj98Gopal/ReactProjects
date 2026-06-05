import { useState } from "react";
import User from "./User";
import BuggyComponent from "./BuggyComponent";
import ErrorBoundary from "./ErrorBoundary";

const ComponentLifecycleMethods = () => {
  const [show, setShow] = useState(true);
  const [isCrash, setIsCrash] = useState(false);

  return (
    <div className="space-y-8 pt-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          React Class Components
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Component Lifecycle Methods
        </h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Practice constructor, render, componentDidMount, componentDidUpdate,
          componentWillUnmount, and error boundary lifecycle methods.
        </p>
      </div>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-950">
              Mount / Update / Unmount
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Hide and show the class component to run unmount and mount again.
            </p>
          </div>

          <button
            type="button"
            className="w-fit rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            onClick={() => setShow((currentShow) => !currentShow)}
          >
            {show ? "Unmount User" : "Mount User"}
          </button>
        </div>

        <div className="mt-5">
          {show ? (
            <User />
          ) : (
            <div className="rounded-lg border border-dashed border-slate-300 p-6 text-center text-sm text-slate-600">
              User component is unmounted.
            </div>
          )}
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-950">
              Error Boundary
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Trigger a render error to see getDerivedStateFromError and
              componentDidCatch.
            </p>
          </div>

          <button
            type="button"
            className="w-fit rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50"
            onClick={() => setIsCrash((currentCrash) => !currentCrash)}
          >
            {isCrash ? "Reset Error Demo" : "Crash the UI"}
          </button>
        </div>

        <div className="mt-5">
          <ErrorBoundary key={String(isCrash)}>
            <BuggyComponent isCrash={isCrash} />
          </ErrorBoundary>
        </div>
      </section>
    </div>
  );
};

export default ComponentLifecycleMethods;
