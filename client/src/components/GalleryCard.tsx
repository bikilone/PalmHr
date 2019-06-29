import React, { Component } from "react";

export default class GalleryCard extends Component<{ img: any }> {
  render() {
    console.log(this.props.img.uri);

    return <img src={"http://localhost:5000" + this.props.img.uri} />;
  }
}
