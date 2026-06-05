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
      const FallbackUi = this.props.fallbackUi;

      return <FallbackUi errorMessage={this.state.errorMessage} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
