import React, { Component } from "react";
import { connect } from "react-redux";
import { SCREEN_STATE_LOADING } from "../../../core/components/screen/action";
import * as styles from "./loader.scss";
import Sidebar from "../sidebar";
import Main from "../main";
import Transition from "../../../core/components/transition";

@connect( state => {
  return {
    screenState: state.screen.state,
  };
})
export default class Loader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Sidebar/>
          {
            this.props.screenState === SCREEN_STATE_LOADING &&
            (
              <div className={styles["loader-section"]}>
                <div className={styles["screen-loader"]} />
              </div>
            )
          }
          <Main>
            <Transition
              className={styles["animator"]}
              onEnterClassName={styles["fade-in"]}
              onExitClassName={styles["fade-out"]}
            >
              {this.props.children || null}
            </Transition>
          </Main>
        </div>
      </div>
    );
  }
}
