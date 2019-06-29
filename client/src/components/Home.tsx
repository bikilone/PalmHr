import React, { Component } from "react";
import GalleryCard from "./GalleryCard";
import TagList from "./TagList";
import Gallery from "./Gallery";

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
    ],
    imgs: []
  };
  componentDidMount() {
    fetch("http://localhost:5000/pictures")
      .then(data => data.json())
      .then(res =>
        this.setState({
          imgs: res.pictures
        })
      );
  }
  render() {
    return (
      <main className="home">
        <h1 className="section-title">Dubai Pictures</h1>
        <div className="line" />
        <p className="pictures-number">503 pictures of Dubai</p>
        <hr />
        <p>Related Searches:</p>
        <TagList tags={this.state.tags} />
        <Gallery imgs={this.state.imgs} />
      </main>
    );
  }
}
