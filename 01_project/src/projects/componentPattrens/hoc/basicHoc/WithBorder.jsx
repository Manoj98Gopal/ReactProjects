const WithBorder = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    return (
      <div className="border border-blue-500 p-2 rounded-sm">
        <WrappedComponent {...props} />
      </div>
    );
  };

  return EnhancedComponent;
};

export default WithBorder;
