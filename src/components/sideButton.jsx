import React, { Component } from "react";

export default class SideButton extends Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        className="p-2 m-0 w-100 text-light sidebutton"
        style={this.style}
      >
        <p className="pl-3">{this.props.name}</p>
      </div>
    );
  }

  style = {};
}
