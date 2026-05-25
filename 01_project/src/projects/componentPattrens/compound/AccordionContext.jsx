import { createContext, useContext } from "react";

export const AccordionContext = createContext();

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      "useAccordionContext must be used within an AccordionProvider"
    );
  }

  return context;
};
