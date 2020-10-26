import React, { Component } from "react";
import { changeState } from "../App";

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }
  render() {
    const { username, password } = this.state;
    const goToSignin = () => {
      changeState(1);
    };
    const change = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };
    const login = (e) => {
      e.preventDefault();
      var pass = localStorage.getItem(username);
      if (pass === password) {
        changeState(1);
        localStorage.setItem("isLoggedIn", true);
      } else {
        alert("Username or Password is not Correct");
      }
    };
    return (
      <div className="box">
        <h1>login</h1>
        <input
          type="text"
          placeholder="Username"
          className="hell"
          onChange={change}
          name="username"
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          className="hell"
          onChange={change}
          name="password"
          value={password}
        />
        <div className="btns">
          <input
            type="submit"
            value="Login"
            className="heaven"
            onClick={login}
          />
          <input
            type="submit"
            value="Sign In"
            className="heaven"
            onClick={goToSignin}
          />
        </div>
      </div>
    );
  }
}
