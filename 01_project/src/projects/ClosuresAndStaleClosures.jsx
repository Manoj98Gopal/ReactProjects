import React, { useEffect, useRef, useState } from "react";
import { usePrevious } from "../components/usePrevious";

// Every renders is snapshot or photo of data, every render it creates  new variable and functions

const ClosuresAndStaleClosures = () => {
  const [count, setCount] = useState(0);

  const ref = useRef(count);
  const previousValue = usePrevious(count);

  // For over come of stale data
  useEffect(() => {
    ref.current = count;
  }, [count]);

  const handleShowAfterThreeSecond = () => {
    setTimeout(() => {
      // over come of stale data
      console.log(ref.current);

      // stale data
      console.log(count);
    }, 3000);
  };

  return (
    <div className="space-y-8 pt-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          JavaScript + React
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Closures and Stale Closures
        </h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          A closure means a function remembers the values from the render where
          it was created. In React, every render is like a fresh snapshot of
          state and props.
        </p>
      </div>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-950">Problem</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            If you start a timer and then update the count, the timer callback
            may still remember the old count. That old remembered value is
            called stale data.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-950">Example</h2>
          <pre className="mt-3 overflow-x-auto rounded bg-slate-950 p-4 text-xs leading-6 text-slate-100">
            <code>{`setTimeout(() => {
  console.log(count);
}, 3000);`}</code>
          </pre>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            This logs the count from the render where the button was clicked.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-950">Resolve</h2>
          <pre className="mt-3 overflow-x-auto rounded bg-slate-950 p-4 text-xs leading-6 text-slate-100">
            <code>{`useEffect(() => {
  ref.current = count;
}, [count]);`}</code>
          </pre>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            A ref can store the latest value without waiting for the old
            callback to be recreated.
          </p>
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-950">Try It</h2>
            <p className="mt-1 text-sm text-slate-600">
              Click "Show after 3 seconds", then increment before the timer
              finishes. Check the console to compare stale count and latest ref
              value.
            </p>
          </div>

          <div className="grid gap-2 rounded-lg bg-slate-50 p-4 text-sm sm:grid-cols-2">
            <p>
              <span className="font-semibold text-slate-950">
                Current count:
              </span>{" "}
              {count}
            </p>
            <p>
              <span className="font-semibold text-slate-950">
                Previous count:
              </span>{" "}
              {previousValue ?? "No previous value yet"}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increment
          </button>

          <button
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            onClick={handleShowAfterThreeSecond}
          >
            Show after 3 seconds
          </button>
        </div>
      </section>

      <div className="rounded-lg border border-blue-100 bg-blue-50 p-5">
        <h2 className="text-lg font-bold text-slate-950">Simple Rule</h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          Use normal state when the UI should re-render. Use a ref when an async
          callback needs the latest value without causing another render.
        </p>
      </div>
    </div>
  );
};

export default ClosuresAndStaleClosures;
