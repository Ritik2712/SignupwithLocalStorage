import React, { Component } from "react";
import { changeState } from "../App";

export default class Array extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      discription: "",
      style: { display: "none" },
      list: [],
    };
  }
  componentDidMount(){
    if(localStorage.getItem("arr") === null){
      var y= []
      localStorage.setItem("arr",JSON.stringify(y))
    }
    else{
      var x=localStorage.getItem("arr")
      this.setState({list:JSON.parse(x)})
    }
  }
  render() {
    const onclick = () => {
      this.setState({ style: { display: "block" } });
    };
    const logout = () => {
      localStorage.setItem("isLoggedIn", "false");
      changeState(2);
    };
    const change = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };
    const { name, discription, list, style } = this.state;
    const additem = () => {
      var obj = {
        name: name,
        discription: discription,
      };
      var x = [...list];
      x = x.concat([obj]);
      this.setState({
        list: x,
        name: "",
        discription: "",
        style: { display: "none" },
      });
      console.log(x)
      localStorage.setItem("arr",JSON.stringify(x))
    };
    window.addEventListener("click", (e) => {
      var x = [...e.target.classList];
      if (x.includes("modal")) {
        this.setState({ style: { display: "none" } });
      }
    });
    var items = list.map((item, index) => {
      return (
        <div className="item" key={index}>
          <p>{item.name}</p>
          <h6>{item.discription}</h6>
        </div>
      );
    });
    return (
      <>
        <button className="logout" onClick={logout}>
          Log Out
        </button>
        <div className="sq">
          <h2>List</h2>
          <button className="add" onClick={onclick}>
            +
          </button>
          <br />
          <br />
          <div>{items}</div>
        </div>

        <div className="modal" style={style}>
          <div className="mbox">
            <h1>Add Item</h1>
            <input
              name="name"
              onChange={change}
              value={name}
              placeholder="Name"
            />
            <br />
            <textarea
              name="discription"
              onChange={change}
              id="inp"
              value={discription}
              placeholder="Discription"
            />
            <br />
            <div>
              <button className="btn" onClick={additem}>
                Add Items
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
