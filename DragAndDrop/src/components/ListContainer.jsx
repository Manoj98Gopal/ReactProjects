import React, { useState } from "react";
import TaskList from "./TaskList";
import { DndContext } from "@dnd-kit/core";

const listData = [
  { id: 1, name: "Task 1", description: "Complete the project documentation" },
  { id: 2, name: "Task 2", description: "Review pull requests" },
  { id: 3, name: "Task 3", description: "Prepare for the team meeting" },
  { id: 4, name: "Task 4", description: "Fix bugs in the login flow" },
  { id: 5, name: "Task 5", description: "Update the UI for the dashboard" },
  { id: 6, name: "Task 6", description: "Write unit tests for new features" },
  { id: 7, name: "Task 7", description: "Analyze user feedback" }
];
const ListContainer = () => {
  const [list, setList] = useState(listData);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    const reorderList = (oldIndex, newIndex) => {
      const updatedList = Array.from(list);
      const [removed] = updatedList.splice(oldIndex, 1);
      updatedList.splice(newIndex, 0, removed);
      return updatedList;
    };

    if (over && active.id !== over.id) {
      setList((list) => {
        const oldIndex = list.findIndex((item) => item.id === active.id);
        const newIndex = list.findIndex((item) => item.id === over.id);
        return reorderList(oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Task List
      </h1>
      <ul className="flex flex-col gap-3">
        <DndContext onDragEnd={handleDragEnd}>
          {list.map((item) => (
            <TaskList {...item} key={item.id} />
          ))}
        </DndContext>
      </ul>
    </div>
  );
};

export default ListContainer;
