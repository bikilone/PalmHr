import React from "react";

const Tag: React.FC<{ tag: string }> = props => {
  return <div className="tag ">{props.tag}</div>;
};

export default Tag;
