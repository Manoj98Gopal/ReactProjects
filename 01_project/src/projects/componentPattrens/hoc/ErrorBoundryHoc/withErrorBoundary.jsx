import { Component } from "react";

const withErrorBoundary = (WrappedComponent, FallbackComponent) => {
  return class ErrorBoundary extends Component {
    state = {
      hasError: false,
      error: null
    };

    static getDerivedStateFromError(error) {
      return {
        hasError: true,
        error
      };
    }

    render() {
      if (this.state.hasError) {
        return <FallbackComponent error={this.state.error} />;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withErrorBoundary;
