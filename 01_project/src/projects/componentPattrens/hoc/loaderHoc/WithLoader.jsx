const WithLoader = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    if (props?.isLoading) {
      return <div className="text-center text-gray-500">Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return EnhancedComponent;
};

export default WithLoader;
