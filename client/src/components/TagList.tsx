import React, { Component } from "react";
import Tag from "./Tag";

const TagList: React.FC<{ tags: string[] }> = props => {
  return (
    <div className="tag-list">
      {props.tags.map((tag, i) => (
        <Tag tag={tag} key={i} />
      ))}
    </div>
  );
};

export default TagList;
