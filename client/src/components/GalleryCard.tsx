import React, { Component } from "react";

export default class GalleryCard extends Component<{ img: any }> {
  render() {
    return <img src={"http://localhost:5000" + this.props.img.uri} />;
  }
}
