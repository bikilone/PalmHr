import React, { Component } from "react";
import Tag from "../components/Tag";
import GalleryCard from "../components/GalleryCard";

export default class Home extends Component {
  state = {
    tags: [
      "Biki",
      "Aki",
      "Djura",
      "Biki",
      "Aki",
      "Djura",
      "Biki",
      "Aki",
      "Djura",
      "Biki",
      "Aki",
      "Djura"
    ]
  };
  render() {
    return (
      <main className="home">
        <h1 className="section-title">Dubai Pictures</h1>
        <div className="line" />
        <p className="pictures-number">503 pictures of Dubai</p>
        <hr />
        <p>Related Searches:</p>
        <div className="tag-list">
          {this.state.tags.map(tag => (
            <Tag tag={tag} />
          ))}
        </div>
        <div className="gallery">
          <GalleryCard />
        </div>
      </main>
    );
  }
}
