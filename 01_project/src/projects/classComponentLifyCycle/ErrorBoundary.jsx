import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      errorMessage: ""
    };
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError");

    return {
      hasError: true,
      errorMessage: error.message
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("componentDidCatch");

    console.log("Error :", error);
    console.log("Error info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-lg border border-red-200 bg-red-50 p-5">
          <h2 className="text-lg font-bold text-red-800">
            Something went wrong
          </h2>
          <p className="mt-2 text-sm text-red-700">
            {this.state.errorMessage}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
