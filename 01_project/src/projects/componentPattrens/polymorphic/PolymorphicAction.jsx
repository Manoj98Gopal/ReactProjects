const variantClasses = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  danger: "bg-red-600 text-white hover:bg-red-700"
};

function PolymorphicAction({
  as: Component = "button",
  children,
  variant = "primary",
  className = "",
  ...rest
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm font-semibold transition-colors";

  return (
    <Component
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default PolymorphicAction;
