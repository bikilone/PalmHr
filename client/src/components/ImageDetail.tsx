import React, { Component } from "react";
import Author from "./Author";
import TagList from "./TagList";
import PriceSlot from "./PriceSlot";
import { RouteComponentProps } from "react-router";

export default class ImageDetail extends Component<RouteComponentProps> {
  state = {
    prices: [20, 50, 100],
    tags: ["Biki", "Aki", "Djura"],
    img: ""
  };
  componentDidMount() {
    this.setState({ img: "http://localhost:5000" + this.props.match.url });
  }
  render() {
    return (
      <div className="detail-page">
        <img src={this.state.img} className="detail-page-img" />
        <div className="detail-page-about">
          <div className="back">
            <i className="fas fa-chevron-left back-button" />
            <span>Back to Results</span>
          </div>
          <Author />
          <h1 className="img-title">Image Tittle</h1>
          <p className="img-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            repellendus accusantium maxime excepturi
          </p>
          <TagList tags={this.state.tags} />
          <hr />
          <div className="price-slots">
            {this.state.prices.map(price => (
              <PriceSlot price={price} />
            ))}
          </div>
          <h1>Use this image excuslively for:</h1>
          <PriceSlot price={300} extended={true} />
          <p>
            Protect your work by licensing the exclusive rights to our images
            with Market Freeze
          </p>
          <hr />
          <button className="add-to-cart">ADD TO CART</button>
        </div>
      </div>
    );
  }
}
