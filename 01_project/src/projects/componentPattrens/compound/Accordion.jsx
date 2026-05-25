import React, { useState, useCallback } from "react";
import { AccordionContext } from "./AccordionContext";

const Accordion = ({ children, defaultOpen }) => {
  const [openId, setOpenId] = useState(defaultOpen);

  const toggleItem = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <AccordionContext.Provider
      value={{
        openId,
        toggleItem
      }}
    >
      <div className="space-y-2">{children}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
