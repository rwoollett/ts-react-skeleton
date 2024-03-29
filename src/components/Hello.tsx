import React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Hello extends React.Component<HelloProps, unknown> {
  render(): JSX.Element  {
    return (
      <h1>
        Hello World from {this.props.compiler} and {this.props.framework}!
      </h1>
    );
  }
}
