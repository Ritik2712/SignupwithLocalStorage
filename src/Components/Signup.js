import React, { Component } from "react";
import { changeState } from "../App";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password1: "",
      password2: "",
      disable: true,
    };
  }

  render() {
    const { username, password1, password2, disable } = this.state;
    const signIn = (e) => {
      e.preventDefault();
      if (localStorage.getItem(username) !== null) {
        alert("Username Existed");
      } else {
        localStorage.setItem(username, password1);
      }
      this.setState({ username: "", password1: "", password2: "" });
      changeState(2);
    };
    const changes = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
      if (
        password1 === password2 &&
        password1.length !== 0 &&
        password2.length !== 0
      ) {
        this.setState({ disable: false });
      } else {
        this.setState({ disable: false });
      }
    };
    const goToLogIn = () => {
      changeState(2);
    };

    return (
      <div>
        <div className="box">
          <h1>Sign Up</h1>
          <input
            type="text"
            placeholder="Username"
            className="hell"
            name="username"
            value={username}
            onChange={changes}
          />
          <input
            type="password"
            placeholder="Password"
            className="hell"
            name="password1"
            value={password1}
            onChange={changes}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="hell"
            name="password2"
            value={password2}
            onChange={changes}
          />
          <div className="btn">
            <input
              type="submit"
              value="Sign In"
              className="heaven"
              onClick={signIn}
              disabled={disable}
            />
            <input
              type="submit"
              value="Log In"
              className="heaven"
              onClick={goToLogIn}
            />
          </div>
        </div>
      </div>
    );
  }
}
