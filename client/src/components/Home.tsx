import React, { Component } from "react";
import TagList from "./TagList";
import Gallery from "./Gallery";
import { connect } from "react-redux";

import { fetchImgs } from "../store/actions";
import Picture from "../interfaces/picture.interface";

class Home extends Component<{ imgs: string[]; tags: string[] }> {
  render() {
    const { imgs, tags } = this.props;

    return (
      <main className="home">
        <h1 className="section-title">Dubai Pictures</h1>
        <div className="line" />
        <p className="pictures-number">503 pictures of Dubai</p>
        <hr />
        <p>Related Searches:</p>
        <TagList tags={tags} />
        <Gallery imgs={imgs} />
      </main>
    );
  }
}

export default Home;
