import React from "react";
import { connect } from "react-redux";
import { onSearch } from "../store/actions";

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: any) => dispatch(onSearch(event.target.value))
  };
};

interface NavbarProps {
  onSearch: (event: any) => any;
}

const Navbar: React.FC<NavbarProps> = props => {
  return (
    <div className="nav">
      <div className="brand">
        <i className="fas fa-camera-retro brand-logo" />
        <h3 className="brand-title">SOWARY</h3>
      </div>
      <div className="nav-search">
        <input
          type="text"
          className="nav-search-input"
          onChange={props.onSearch}
        />
        <i className="fas fa-search nav-search-icon" />
      </div>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
