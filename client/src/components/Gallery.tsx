import React, { Component } from "react";
import GalleryCard from "./GalleryCard";

export default class Gallery extends Component<{ imgs: string[] }> {
  render() {
    return (
      <div className="gallery">
        {this.props.imgs.map((img, i) => (
          <GalleryCard img={img} key={i} />
        ))}
      </div>
    );
  }
}
