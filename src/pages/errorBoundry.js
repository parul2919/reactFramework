/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    const { hasError, errorInfo, error } = this.state;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <h1>
          Something went wrong.t{errorInfo} with error {error}
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
