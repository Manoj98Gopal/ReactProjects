import React from "react";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { Icon } from "@iconify-icon/react/dist/iconify.js";

const TaskList = ({ id, name, description }) => {
  const {
    attributes,
    listeners,
    setNodeRef: setDraggableNodeRef,
    transform,
    isDragging // Use the isDragging property
  } = useDraggable({
    id: id
  });

  const { setNodeRef: setDroppableNodeRef } = useDroppable({
    id: id
  });

  const backgroundColorWhite = "#fff";
  const borderColorDarkGrey8 = "#888888";

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        backgroundColor: isDragging ? backgroundColorWhite : null, 
        border: isDragging ? `1px dashed ${borderColorDarkGrey8}` : null 
      }
    : undefined;

  return (
    <li
      ref={(node) => {
        setDraggableNodeRef(node);
        setDroppableNodeRef(node);
      }}
      style={style}
      className="flex flex-row justify-between p-4 shadow-custom hover:bg-gray-50 transition"
    >
      <div className="flex flex-col">
        <span className="text-lg font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{description}</span>
      </div>
      <div
        {...listeners}
        {...attributes}
        className="cursor-grab hover:bg-gray-200 rounded p-1 transition"
      >
        <Icon icon="fluent:drag-20-regular" width="20" height="20" />
      </div>
    </li>
  );
};

export default TaskList;
