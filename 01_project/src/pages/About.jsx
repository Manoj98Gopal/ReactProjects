import React, { useCallback, useEffect, useMemo, useState } from "react";
import TodoItem from "../components/TodoItem";

const About = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Learn Fiber" }
  ]);

  //   const todos = useMemo(() => {
  //     return [
  //     { id: 1, text: "Learn React" },
  //     { id: 2, text: "Learn Fiber" }
  //   ];
  //   },[])

  // console.log("Parent Render");

  useEffect(() => {
    console.log("useEffect count :", count);

    return () => {
      console.log("clean up function", count);
    };
  }, []);

  const handleDelete = useCallback((id) => {
    console.log("deleted ", id);
  }, []);

  //  const handleDelete = (id) => {
  //     console.log("delete :",id)
  //  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">UseCallback and useMemo hooks uses</h1>

      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="cursor-pointer border py-2 px-4 rounded-lg"
      >
        Increase count
      </button>

      {todos?.map((data, idx) => (
        <TodoItem key={idx} todo={data} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default About;
