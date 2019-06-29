import React from "react";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="brand">
        <i className="fas fa-camera-retro brand-logo" />
        <h3 className="brand-title">SOWARY</h3>
      </div>
      <div className="nav-search">
        <input type="text" className="nav-search-input" />
        <i className="fas fa-search nav-search-icon" />
      </div>
    </div>
  );
}
