import useSelect from "./useSelect";

const DropDownSelect = ({ options, onChange }) => {

  const {
    ref,
    isOpen,
    selected,

    getToggleProps,
    getListProps,
    getOptionProps

  } = useSelect({ options, onChange });

  return (
    <div
      ref={ref}
      className="relative w-72"
    >

      <button
        {...getToggleProps()}
        className="
          flex
          w-full
          items-center
          justify-between
          rounded-lg
          border
          border-slate-300
          bg-white
          px-4
          py-3
        "
      >
        <span>
          {selected || "Select option"}
        </span>

        <span>
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {isOpen && (
        <ul
          {...getListProps()}
          className="
            absolute
            mt-2
            w-full
            rounded-lg
            border
            bg-white
            shadow-lg
          "
        >
          {options.map((option) => (
            <li
              key={option}
              {...getOptionProps(option)}
              className="
                cursor-pointer
                px-4
                py-3
                hover:bg-slate-100
              "
            >
              {option}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default DropDownSelect;