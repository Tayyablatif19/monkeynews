import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Brand / Logo */}
          <a className="navbar-brand" href="/">NewsPaper</a>

          {/* Toggler button for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            
          </button>
          

          {/* Collapsible links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Home link */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>

              {/* About link */}
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>

              {/* More categories - optional */}
              <li className="nav-item">
                <a className="nav-link" href="/business">Business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/technology">Technology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sports">Sports</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
