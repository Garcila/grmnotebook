import React, { Component } from "react";

export default class userProfile extends Component {
  render() {
    return (
      <div>
        <h2 className="text-light p-3 border-bottom border-warning">
          {this.props.name}
        </h2>
      </div>
    );
  }
}
