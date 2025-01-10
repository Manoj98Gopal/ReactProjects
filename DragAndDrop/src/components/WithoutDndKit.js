
// list container
///////////////////////////////////////////////////
// import React, { useState } from "react";
// import TaskList from "./TaskList";

// const listData = [
//   { id: 1, name: "Task 1", description: "Complete the project documentation" },
//   { id: 2, name: "Task 2", description: "Review pull requests" },
//   { id: 3, name: "Task 3", description: "Prepare for the team meeting" },
//   { id: 4, name: "Task 4", description: "Fix bugs in the login flow" },
//   { id: 5, name: "Task 5", description: "Update the UI for the dashboard" },
//   { id: 6, name: "Task 6", description: "Write unit tests for new features" },
//   { id: 7, name: "Task 7", description: "Analyze user feedback" }
// ];
// const ListContainer = () => {
//   const [list, setList] = useState(listData);
//   const [draggedIndex, setDraggedIndex] = useState(null);
//   const [dragOverIndex, setDragOverIndex] = useState(null);

//   const handleDragStart = (index) => {
//     setDraggedIndex(index);
//   };

//   const handleDragOver = (index) => {
//     if (draggedIndex === index) return;

//     setDragOverIndex(index);

//     // Create preview of new order
//     const newList = [...list];
//     const [draggedItem] = newList.splice(draggedIndex, 1);
//     newList.splice(index, 0, draggedItem);
//     setList(newList);
//     setDraggedIndex(index);
//   };

//   const handleDragEnd = () => {
//     setDraggedIndex(null);
//     setDragOverIndex(null);
//   };

//   return (
//     <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
//       <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
//         Task List
//       </h1>
//       <ul className="space-y-3">
//         {list.map((item, index) => (
//           <TaskList
//             key={item.id}
//             {...item}
//             index={index}
//             onDragStart={handleDragStart}
//             onDragOver={handleDragOver}
//             onDragEnd={handleDragEnd}
//             isDragging={index === draggedIndex}
//             isPlaceholder={index === dragOverIndex}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListContainer;












//taskList component
/////////////////////////////////////////////////////
// import React from "react";
// import { Icon } from "@iconify-icon/react/dist/iconify.js";

// const TaskList = ({
//   id,
//   name,
//   description,
//   onDragStart,
//   onDragOver,
//   onDragEnd,
//   index,
//   isDragging,
//   isPlaceholder
// }) => {


//   return (
//     <li
//       draggable={!isPlaceholder}
//       onDragStart={(e) => {
//         e.dataTransfer.setData("text/plain", index.toString());
//         onDragStart(index);
//       }}
//       onDragOver={(e) => {
//         e.preventDefault();
//         onDragOver(index);
//       }}
//       onDragEnd={onDragEnd}
//       className={`
//       flex flex-row justify-between p-4 bg-white rounded-lg
//       transition-all duration-200
//       ${isDragging ? "opacity-50" : "opacity-100"}
//       ${
//         isPlaceholder
//           ? "border-2 border-dashed border-blue-300 bg-blue-50"
//           : "shadow-md hover:shadow-lg"
//       }
//     `}
//     >
//       <div className="flex flex-col">
//         <span className="text-lg font-medium text-gray-700">{name}</span>
//         <span className="text-sm text-gray-500">{description}</span>
//       </div>
//       <Icon icon="fluent:drag-20-regular" width="20" height="20" />
//     </li>
//   );
// };

// export default TaskList;



const data = ""
