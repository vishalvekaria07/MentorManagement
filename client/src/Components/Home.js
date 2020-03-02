import React, { Component, Fragment } from "react";
import CreateMentor from "./CreateMentor";
import ManageMentor from "./ManageMentor";
//import {Button} from "react-buttons";

export default class home extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      username: "",
      password: "",
      isOnCreateClicked: false,
      isManageClicked: false
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onClick = () => {
    if (this.state.username === "admin" && this.state.password === "admin") {
      this.setState({
        isLoggedIn: true
      });
    }
  };
  onCreateClicked = () => {
    this.setState({
      isOnCreateClicked: true,
      isOnManageClicked: false
    });
  };
  onManageClicked = () => {
    this.setState({
      isOnManageClicked: true,
      isOnCreateClicked: false
    });
  };

  render() {
    return (
      <Fragment>
        {!this.state.isLoggedIn && (
          <form className="center">
            <h1>Admin Login</h1><br />
            <label>Username:</label><input name="username" value={this.state.username} type="text" onChange={this.onChange} /><br /><br />
            <label>Password:</label><input name="password" value={this.state.password} type="password" onChange={this.onChange} />
            <br /><br />
            <button type="button" className="btn btn-primary" onClick={this.onClick}>
              Submit
            </button>
          </form>
        )}
        {this.state.isLoggedIn &&
          !this.state.isOnCreateClicked &&
          !this.state.isOnManageClicked && (
            <div className="center">
              <button className="btn btn-primary btn-margin" onClick={this.onCreateClicked}>
                Create Mentor
              </button><br />
              <button className="btn btn-primary btn-margin" onClick={this.onManageClicked}>
                Manage Mentor
              </button>
            </div>
          )}
        {this.state.isLoggedIn && this.state.isOnCreateClicked && (
          <CreateMentor />
        )}
        {this.state.isLoggedIn && this.state.isOnManageClicked && (
          <ManageMentor />
        )}
      </Fragment>
    );
  }
}
