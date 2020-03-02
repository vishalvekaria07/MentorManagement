import React, { Component } from "react";
import "../App.css";

class AddTodo extends Component {
  state = {
    taskName: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.addtodo(this.state.taskName);
    this.setState({ taskName: "" });
  };

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="taskName"
          placeholder="Add Task..."
          value={this.state.taskName}
          onChange={this.onChange}
          style={{ flex: "20", padding: "7px " }}
        />
        <input
          type="submit"
          value="Add Task"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
