const toneClasses = {
  success: "border-green-200 bg-green-50 text-green-700",
  warning: "border-yellow-200 bg-yellow-50 text-yellow-800",
  info: "border-blue-200 bg-blue-50 text-blue-700"
};

function PolymorphicBadge({
  as: Component = "span",
  children,
  tone = "info",
  className = "",
  ...rest
}) {
  return (
    <Component
      className={`inline-flex items-center rounded-sm border px-2 py-1 text-xs font-semibold ${toneClasses[tone]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default PolymorphicBadge;
