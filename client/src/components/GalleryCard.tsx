import React from "react";
import { Link } from "react-router-dom";

const GalleryCard: React.FC<{ img: any }> = props => {
  return (
    <Link to={props.img.uri}>
      <img src={"http://localhost:5000" + props.img.uri} />
    </Link>
  );
};

export default GalleryCard;
