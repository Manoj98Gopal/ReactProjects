import React, { useCallback } from "react";
import DropDownSelect from "./DropDownSelect";

const HeadlessPattern = () => {
  const options = [null,"React", "Next.js", "Vue", "Angular"];

  const handleChange = useCallback((option) => {
    console.log("Selected option:", option);
  }, []);

  return (
    <div className="mt-8">
      <div className="space-y-2">
        <h1>Drop down</h1>
        <DropDownSelect options={options} onChange={handleChange} />
      </div>
    </div>
  );
};

export default HeadlessPattern;
