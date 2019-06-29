import React, { Component } from "react";

export default class Tag extends Component<{ tag: string }> {
  render() {
    return <div className="tag">{this.props.tag}</div>;
  }
}
