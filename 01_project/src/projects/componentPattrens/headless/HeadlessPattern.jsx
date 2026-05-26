import React, { useCallback, useState } from "react";
import DropDownSelect from "./DropDownSelect";
const options = ["React", "Next.js", "Vue", "Angular"];

const HeadlessPattern = () => {
  const [dropdownValue, setDropdownValue] = useState(null);

  const handleChange = useCallback((option) => {
    console.log("Selected option:", option);
    setDropdownValue(option);
  }, []);

  return (
    <div className="mt-8">
      <div className="space-y-2">
        <h1>Drop down</h1>
        <DropDownSelect options={options} onChange={handleChange} />
        {dropdownValue !== null && <p>Out put : {dropdownValue}</p>}
      </div>
    </div>
  );
};

export default HeadlessPattern;
