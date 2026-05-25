import React from "react";

const AccordionItem = ({ children }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {children}
    </div>
  );
};

export default AccordionItem;
