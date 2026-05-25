import React from "react";
import { useAccordionContext } from "./AccordionContext";

const AccordionTrigger = ({ id, children }) => {
  const { openId, toggleItem } = useAccordionContext();

  const isOpen = openId === id;

  return (
    <button
      onClick={() => toggleItem(id)}
      className="
        flex
        w-full
        items-center
        justify-between
        px-5
        py-4
        text-left
        font-semibold
        text-slate-900
        transition
        hover:bg-slate-50
      "
      aria-expanded={isOpen}
    >
      <span>{children}</span>

      <span
        className={`
          text-lg
          transition-transform
          duration-300
          ${isOpen ? "rotate-180" : ""}
        `}
      >
        ▼
      </span>
    </button>
  );
};

export default AccordionTrigger;
