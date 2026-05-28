import React, { useCallback, useState } from "react";
import DropDownSelect from "./DropDownSelect";
import RadioButton from "./RadioButton";
import PillToggle from "./PillToggle";
const options = ["React", "Next.js", "Vue", "Angular"];

const HeadlessPattern = () => {
  const [dropdownValue, setDropdownValue] = useState(null);

  const handleChangeDropdown = useCallback((option) => {
    console.log("Selected option:", option);
    setDropdownValue(option);
  }, []);

  const handleChangeRadio = useCallback((option) => {
    // console.log("Selected option:", option);
  }, []);

  const handleChangePill = useCallback((option) => {
    // console.log("Selected option:", option);
  }, []);

  return (
    <div className="mt-8">
      <div className="space-y-2">
        <h1>Drop down</h1>
        <DropDownSelect options={options} onChange={handleChangeDropdown} />
        {dropdownValue !== null && <p>Out put : {dropdownValue}</p>}
      </div>

      <div className="mt-8 space-y-2">
        <h1>Radio Button</h1>
        <RadioButton options={options} onChange={handleChangeRadio} />
      </div>

      <div className="mt-8 space-y-2">
        <h1>Pill toggle </h1>
        <PillToggle options={options} onChange={handleChangePill} />
      </div>
    </div>
  );
};

export default HeadlessPattern;
