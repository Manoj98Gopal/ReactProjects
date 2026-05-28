import useSelect from "./useSelect";

const PillToggle = ({ options, onChange }) => {
  const { selected, getListProps, getOptionProps } = useSelect({
    options,
    onChange
  });

  return (
    <div className="flex items-center gap-4" {...getListProps()}>
      {options.map((option, idx) => (
        <button
          className={`border border-gray-400 py-2 px-4 rounded cursor-pointer transition ${selected === option ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
          key={idx}
          {...getOptionProps(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default PillToggle;
