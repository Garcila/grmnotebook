import React, { Component } from "react";
import Financials from "./financials";
import Title from "./title";

export default class Dashboard extends Component {
  state = { data: [] };
  onProfileChange = profile => {
    this.refs.financials.onProfileChange(profile);
    this.refs.title.onProfileChange(profile);
  };
  render() {
    return (
      <React.Fragment>
        <Title ref="title" companyId={this.props.profile} />
        <Financials ref="financials" companyId={this.props.profile} />
      </React.Fragment>
    );
  }
}
