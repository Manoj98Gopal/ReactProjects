const paddingClasses = {
  sm: "p-3",
  md: "p-4",
  lg: "p-6"
};

function PolymorphicBox({
  as: Component = "div",
  children,
  padding = "md",
  className = "",
  ...rest
}) {
  return (
    <Component
      className={`rounded-sm border border-gray-300 bg-white ${paddingClasses[padding]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default PolymorphicBox;
