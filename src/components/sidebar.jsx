import React, { Component } from "react";
import UserProfile from "./userProfile";
import SideButton from "./sideButton";

export default class Sidebar extends Component {
  render() {
    return (
      <div style={this.style}>
        <UserProfile name="user" />
        <SideButton onClick={() => this.props.onClick("fb")} name="Facebook" />
        <SideButton onClick={() => this.props.onClick("googl")} name="Google" />
        <SideButton onClick={() => this.props.onClick("amzn")} name="Amazon" />
        <SideButton onClick={() => this.props.onClick("aapl")} name="Apple" />
        <SideButton
          onClick={() => this.props.onClick("msft")}
          name="Microsoft"
        />
      </div>
    );
  }
  style = {
    width: "100%",
    background: "#222"
  };
}
