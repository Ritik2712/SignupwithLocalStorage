import React, { Component } from "react";
import Container from "./Components/Container";
import Signup from "./Components/Signup";
import Array from "./Components/Array";

export let changeState;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
    };
  }
  render() {
    changeState = (x) => {
      this.setState({ page: x });
    };
    if (localStorage.getItem("isLoggedIn") === null) {
      localStorage.setItem("isLoggedIn", false);
    }
    let x;
    switch (this.state.page) {
      case 1:
        x =
          localStorage.getItem("isLoggedIn") === "true" ? (
            <Array />
          ) : (
            <Signup />
          );
        break;
      case 2:
        x =
          localStorage.getItem("isLoggedIn") === "true" ? null : <Container />;
        break;
      default:
        break;
    }
    return <React.Fragment>{x}</React.Fragment>;
  }
}
