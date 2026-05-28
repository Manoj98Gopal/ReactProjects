const ErrorFallback = ({ error }) => {
  return (
    <div
      className="
        rounded-lg
        border
        border-red-300
        bg-red-50
        p-6
      "
    >
      <h1
        className="
          text-xl
          font-bold
          text-red-700
        "
      >
        Something went wrong
      </h1>

      <p className="mt-2 text-red-600">{error?.message}</p>
    </div>
  );
};

export default ErrorFallback;
