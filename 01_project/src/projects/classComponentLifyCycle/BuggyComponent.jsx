const BuggyComponent = ({ isCrash }) => {
  if (isCrash) {
    throw new Error("Dashboard crashed");
  }

  return (
    <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800">
      BuggyComponent is rendering normally.
    </div>
  );
};

export default BuggyComponent;
