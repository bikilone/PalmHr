import React from "react";

const Author: React.FC<{ name: string }> = props => {
  return (
    <div className="author">
      <img
        className="author-img"
        src="https://i.pinimg.com/originals/05/4a/d7/054ad75024d0859164e8e9dfaf611aba.jpg"
      />
      <div className="author-detail">
        <span className="author-name">{props.name}</span>
        <button className="follow-author">Follow</button>
      </div>
    </div>
  );
};

export default Author;
