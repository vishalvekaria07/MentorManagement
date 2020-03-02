import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Home from "./Components/Home";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
