import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <header>
        <div className="container">
          <div className="inner-content">
            <div className="brand">
              <Link to="/">WatchList</Link>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/">WatchList</Link>
              </li>
              <li>
                <Link to="/watched">Watched</Link>
              </li>
              <li>
                <Link to="/add" className="btn btn-main">
                  + Add
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
