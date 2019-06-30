import React from "react";
import GalleryCard from "./GalleryCard";

const Gallery: React.FC<{ imgs: string[] }> = props => {
  return (
    <div className="gallery">
      {props.imgs.map((img, i) => (
        <GalleryCard img={img} key={i} />
      ))}
    </div>
  );
};

export default Gallery;
