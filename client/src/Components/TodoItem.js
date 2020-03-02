import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "2px",
      borderBottom: "5px",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, taskName } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          {taskName}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50%",
  float: "right"
};
export default TodoItem;
