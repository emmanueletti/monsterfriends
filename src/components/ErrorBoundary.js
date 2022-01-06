import React, { Component } from 'react';

// Error boundary feature is not yet implemented for hooks so will have
// to use class components

// ErrorBoundary is one giant React try catch clock

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <h1>...Something went wrong</h1>
    ) : (
      this.props.children
    );
  }
}
