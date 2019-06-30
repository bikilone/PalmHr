import React, { Component } from "react";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router";
import Home from "./Home";
import ImageDetail from "./ImageDetail";
import Footer from "./Footer";
import { fetchImgs, onSearch } from "../store/actions";
import { connect } from "react-redux";
import Picture from "../interfaces/picture.interface";

const mapStateToProps = (state: any) => {
  return {
    imgs: state.fetchImgs.imgs,
    isPending: state.fetchImgs.isPending,
    error: state.fetchImgs.error,
    tags: state.fetchImgs.tags,
    searchField: state.searchImgs.searchField,
    authors: state.fetchImgs.authors
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFetchImgs: () => dispatch(fetchImgs()),
    onSearchChange: (event: any) => dispatch(onSearch(event.target.value))
  };
};

interface AppProps {
  onFetchImgs: () => void;
  onSearchChange: (event: any) => any;
  imgs: [];
  tags: [];
  searchField: string;
  isPending: boolean;
  authors: [];
}

class App extends Component<AppProps> {
  componentDidMount() {
    this.props.onFetchImgs();
  }
  render() {
    const {
      imgs,
      tags,
      onSearchChange,
      searchField,
      isPending,
      authors
    } = this.props;

    const filteredImgs = imgs.filter((img: Picture) => {
      const filteredNames = img.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
      const fitleredTags = img.tags.includes(searchField.toLowerCase());
      const filteredAuthors = img.author
        .toLowerCase()
        .includes(searchField.toLowerCase());
      return filteredNames || fitleredTags || filteredAuthors;
    });

    return (
      <div>
        <Navbar onSearch={onSearchChange} />
        {isPending ? (
          <h1>Pending</h1>
        ) : (
          <Switch>
            <Route
              exact
              path="/pictures"
              render={() => <Home imgs={filteredImgs} tags={tags} />}
            />
            <Route path="/picture/:id" component={ImageDetail} />
            <Redirect from="/" to="/pictures" />
          </Switch>
        )}
        <Footer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
