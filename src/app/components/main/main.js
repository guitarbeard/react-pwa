import React, { Component } from "react";
import * as global from "../../../resources/css/style.scss";
import * as style from "./main.scss";

export default class Main extends Component {
  render() {
    return (
      <div className={`${style.wrap} ${global.col} ${global["h-100"]}`}>
        {this.props.children}
      </div>
    );
  }
}
