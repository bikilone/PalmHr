import React from "react";

const GalleryCard: React.FC<{ img: any }> = props => {
  return <img src={"http://localhost:5000" + props.img.uri} />;
};

export default GalleryCard;
