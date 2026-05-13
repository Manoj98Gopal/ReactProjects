import React, { useMemo, useState } from "react";
import Child from "../components/Child";

const calculateFunction = (num) => {
  for (let i = 0; i < 10000; i++) {}
  console.log("expence call");
  return num * 2;
};

const HomePage = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  //   console.log("Parent Rendering");

  const user = useMemo(() => {
    return {
      name: "Manoj G"
    };
  }, []);

  const expensiveCalc = useMemo(() => {
    return calculateFunction(count);
  }, [count]);

  return (
    <div className="space-y-2">
      <p>Expensive number : {expensiveCalc}</p>
      <p>Count : {count}</p>

      <div>
        <button
          className={`cursor-pointer border py-2 px-4 rounded-lg bg-${toggle ? "black" : "white"} text-${toggle ? "white" : "black"}`}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Black" : "White"}
        </button>
      </div>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="cursor-pointer border py-2 px-4 rounded-lg"
      >
        Increase count
      </button>

      <Child user={user} />
    </div>
  );
};

export default HomePage;
