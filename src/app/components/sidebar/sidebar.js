import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import Link from "../../../core/components/link";
import * as global from "../../../resources/css/style.scss";
import * as style from "./sidebar.scss";


const Sidebar = (props) => {
  const url = props.url.location.pathname;
  return (
    <div className={`${style.wrap} ${global["col-auto"]} ${global["h-100"]}`}>
      <Link className={classNames("text-center")} to="/">
        <h1>LOGO</h1>
      </Link>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className={classNames("nav-link", {active: url === "/"})} to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className={classNames("nav-link", {active: url === "/about"})} to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default connect(state => { return {url: state.router}; })(Sidebar);
