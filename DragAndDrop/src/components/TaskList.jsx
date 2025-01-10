import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon } from "@iconify-icon/react/dist/iconify.js";

const TaskList = ({ id, name, description }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={`
        flex flex-row justify-between p-4 bg-white rounded-lg
        transition-all duration-200
        ${
          isDragging
            ? "shadow-lg border-2 border-dotted border-gray-400"
            : "shadow-md hover:shadow-lg"
        }
      `}
    >
      <div className="flex flex-col">
        <span className="text-lg font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{description}</span>
      </div>
      <div {...attributes} {...listeners}>
        <Icon icon="fluent:drag-20-regular" width="20" height="20" />
      </div>
    </li>
  );
};

export default TaskList;
