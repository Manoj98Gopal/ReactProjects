import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import TaskList from "./TaskList";

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

  // Sensors for drag-and-drop (pointer for mouse, keyboard for accessibility)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  // Handle drag end event
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setList((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Task List
      </h1>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={list} strategy={verticalListSortingStrategy}>
          <ul className="space-y-3">
            {list.map((item) => (
              <TaskList key={item.id} {...item} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default ListContainer;
