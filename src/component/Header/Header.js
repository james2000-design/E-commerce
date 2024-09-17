import React from "react";
import "../Header/style.css";
import logo from "../../Assets/Frame50.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="wrap">
      <div className="container">
        {/* {NAV LOGO} */}
        <img src={logo} alt="" className="logo" />

        {/* END OF NAV LOGO */}
        <nav>
          <ul>
            <Link to="/section">
              {" "}
              <li>CATALOGUE</li>{" "}
            </Link>
            <li>
              <a href="/">FASHION</a>
            </li>
            <li>
              <a href="/">FAVOURITE</a>
            </li>
            <li>
              <a href="/">LIFESTLE</a>
            </li>
            <a href="/">
              <button>SIGNUP</button>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
