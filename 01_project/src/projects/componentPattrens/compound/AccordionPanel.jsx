import React from "react";
import { useAccordionContext } from "./AccordionContext";

const AccordionPanel = ({ id, children }) => {
  const { openId } = useAccordionContext();

  const isOpen = openId === id;

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="region"
      className="
        border-t
        border-slate-200
        px-5
        py-4
        text-slate-600
      "
    >
      {children}
    </div>
  );
};

export default AccordionPanel;
