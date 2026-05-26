import React, { useCallback, useRef, useState } from "react";

const useSelect = ({ options, defaultValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  const ref = useRef(null);

  const select = useCallback((option) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  }, [onChange]);
  const getToggleProps = () => ({
    onClick: () => setIsOpen((prev) => !prev),
    "aria-haspopup": "listbox",
    "aria-expanded": isOpen
  });

  const getListProps = () => ({
    role: "listbox"
  });

  const getOptionProps = (option) => ({
    role: "option",
    "aria-selected": selected === option,
    onClick: () => select(option)
  });

  return {
    ref,
    isOpen,
    selected,
    options,
    getToggleProps,
    getListProps,
    getOptionProps
  };
};

export default useSelect;
