import React from "react";

function WithAuth(WrappedComponent) {
  const AuthenticatedComponent = (props) => {
    const isAuthenticated = true;

    const userData = { name: "Manoj G" };

    return isAuthenticated ? (
      <WrappedComponent {...props} user={userData} />
    ) : (
      <div className="text-red-500 font-bold">
        Access Denied. Please log in.
      </div>
    );
  };

  return AuthenticatedComponent;
}

export default WithAuth;
