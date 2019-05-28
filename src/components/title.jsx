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
      <h1 className="display-2 p-5 text-center">
        {this.state.data.companyName}
      </h1>
    );
  };
}
