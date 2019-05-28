import React, { Component } from "react";

export default class Title extends Component {
  onProfileChange(profile) {
    this.getData();
  }
  state = {};
  componentDidMount() {
    this.getData();
  }
  getData() {
    console.log("getting title data");
    fetch(
      "https://api.iextrading.com/1.0/stock/" +
        this.props.companyId +
        "/company"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ data });
      });
  }
  render() {
    return this.widget();
  }
  widget = () => {
    if (!this.state.data) return null;
    return (
      <div className="text-center">
        <h1 className="display-2">{this.state.data.companyName}</h1>
        <h2>CEO: {this.state.data.CEO}</h2>
        <blockquote className="w-50 m-auto">
          {this.state.data.description}
        </blockquote>
      </div>
    );
  };
}
