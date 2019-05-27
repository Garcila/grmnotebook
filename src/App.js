import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Newsfeed from "./components/newsfeed";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="master">
        <Sidebar />
        <div className="container">
          <Dashboard companyId="aapl" />
        </div>
        <Newsfeed />
      </div>
    </div>
  );
}

export default App;
