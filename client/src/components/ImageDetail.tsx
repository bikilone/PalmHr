import React, { Component } from "react";
import Author from "./Author";
import TagList from "./TagList";
import PriceSlot from "./PriceSlot";
import { RouteComponentProps } from "react-router";
import Picture from "../interfaces/picture.interface";
import { Link } from "react-router-dom";

export default class ImageDetail extends Component<
  RouteComponentProps<{ id: string }>,
  Picture
> {
  state = {
    uri: "",
    author: "",
    name: "",
    description: "",
    tags: [],
    price: {
      small: 0,
      medium: 0,
      large: 0
    },
    exclusive: {
      isSold: false,
      price: 0
    }
  };
  componentDidMount() {
    const imgUri = this.props.match.url;
    this.state.tags.find(tag => tag === "Biki");

    fetch("http://localhost:5000/pictures")
      .then(data => data.json())
      .then(res => res.pictures)
      .then(pictures => {
        let selectedPicture = pictures.find(
          (picture: Picture) => picture.uri === imgUri
        );
        this.setState({ ...selectedPicture });
      });
  }
  render() {
    const imgUri = "http://localhost:5000" + this.props.match.url;
    const { author, name, description, tags, exclusive, price } = this.state;
    const priceSlots = Object.values(price);
    const priceSizes = Object.keys(price);

    return (
      <div className="detail-page">
        <img src={imgUri} className="detail-page-img" />
        <div className="detail-page-about">
          <Link to="/pictures" className="back">
            <i className="fas fa-chevron-left back-button" />
            <span>Back to Results</span>
          </Link>

          <Author name={author} />
          <h1 className="img-title">{name}</h1>
          <p className="img-description">{description}</p>
          <TagList tags={tags} />
          <hr />
          <div className="price-slots">
            {priceSlots.map((price, i) => (
              <PriceSlot price={price} key={i} size={priceSizes[i]} />
            ))}
          </div>
          <h1 className="exclusively">Use this image exclusively for:</h1>
          <PriceSlot price={300} extended={true} />
          <p className="exclusive-rights">
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
