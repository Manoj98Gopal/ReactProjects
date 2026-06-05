const FallBackUi = ({ errorMessage }) => {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-5">
      <h2 className="text-lg font-bold text-red-800">
        Something went wrong
      </h2>
      <p className="mt-2 text-sm text-red-700">{errorMessage}</p>
    </div>
  );
};

export default FallBackUi;
