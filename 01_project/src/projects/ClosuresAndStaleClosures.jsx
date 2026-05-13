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
    <div className="space-y-4">
      <h1>Current count: {count}</h1>
      <h1>Previous count: {previousValue}</h1>

      <div className="space-x-2">
        <button
          className="border px-4 py-2 rounded-lg cursor-pointer"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>

        <button
          className="border px-4 py-2 rounded-lg cursor-pointer"
          onClick={handleShowAfterThreeSecond}
        >
          Show after 3 seconds
        </button>
      </div>
    </div>
  );
};

export default ClosuresAndStaleClosures;
