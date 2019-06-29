import React, { Component } from "react";
import Tag from "./Tag";

export default class TagList extends Component<{ tags: string[] }> {
  render() {
    return (
      <div className="tag-list">
        {this.props.tags.map((tag, i) => (
          <Tag tag={tag} key={i} />
        ))}
      </div>
    );
  }
}
