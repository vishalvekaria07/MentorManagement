import React, { Component, Fragment } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

export default class ToDoMain extends Component {

  delTodo = id => {
    this.props.DelTask(id);
  };

  AddTodo = taskName => {
    this.props.AddTask(taskName);
  };

  render() {
    return (
      <Fragment>
        <AddTodo addtodo={this.AddTodo} />
        <Todos todos={this.props.todos.tasks || this.props.todos} delTodo={this.delTodo} />
      </Fragment>
    );
  }
}
