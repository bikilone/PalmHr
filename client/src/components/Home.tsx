import React, { Component } from "react";
import TagList from "./TagList";
import Gallery from "./Gallery";
import { connect } from "react-redux";

import { fetchImgs } from "../store/actions";

const mapStateToProps = (state: any) => {
  return {
    imgs: state.imgs,
    isPending: state.isPending,
    error: state.error,
    tags: state.tags
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFetchImgs: () => dispatch(fetchImgs())
  };
};

interface HomeProps {
  onFetchImgs: () => void;
  imgs: [];
  tags: [];
}

class Home extends Component<HomeProps> {
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
    // fetch("http://localhost:5000/pictures")
    //   .then(data => data.json())
    //   .then(res =>
    //     this.setState({
    //       imgs: res.pictures
    //     })
    //   );
    this.props.onFetchImgs();
  }
  render() {
    const { imgs, tags } = this.props;
    console.log(imgs);

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
