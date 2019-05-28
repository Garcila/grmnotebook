import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Newsfeed from "./components/newsfeed";
import Dashboard from "./components/dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.setProfile.bind(this);
  }
  state = { profile: "aapl" };

  setProfile = profile => {
    console.log(profile);
    this.refs.dashboard.onProfileChange(profile);
    this.setState({ profile });
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="master">
          <Sidebar onClick={this.setProfile} />
          <div className="container">
            <Dashboard ref="dashboard" profile={this.state.profile} />
          </div>
          <Newsfeed />
        </div>
      </div>
    );
  }
}

export default App;
