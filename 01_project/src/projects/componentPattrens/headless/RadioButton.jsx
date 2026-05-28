import useSelect from "./useSelect";

const RadioButton = ({ options, onChange }) => {
  const { selected, getOptionProps, getListProps } = useSelect({
    options,
    onChange
  });

  return (
    <div>
      <ul {...getListProps()} className="space-y-2">
        {options.map((option, idx) => {
          return (
            <li
              key={idx}
              className="flex items-center gap-2 cursor-pointer"
              {...getOptionProps(option)}
            >
              <input
                type="radio"
                checked={selected === option}
                readOnly
                className="h-4 w-4 rounded-full border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span>{option}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RadioButton;
