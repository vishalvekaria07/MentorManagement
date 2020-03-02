import React, { Component } from "react";
import ToDoMain from "./ToDoMain";
import uuid from "uuid";
import axios from "axios";
import "../App.css";



export default class CreateMentor extends Component {
  constructor() {
    super();
    this.state = {
      mentorName: "",
      mentorAge: "",
      todos: [],
      isMentorSaved: false
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  DelTask = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  AddTask = taskName => {
    if (taskName) {
      const newTodo = {
        id: uuid.v4(),
        taskName
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    }
  };


  onSubmitClick = () => {
    axios({
      method: 'post',
      url: 'http://localhost:8999/postMentors',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        tasks: this.state.todos,
        mentorId: uuid.v4(),
        mentorName: this.state.mentorName,
        mentorAge: this.state.mentorAge
      }
    })
    this.setState({
      isMentorSaved: true,
      mentorName: "",
      mentorAge: "",
      todos: [],
    })
  };

  render() {
    return (
      <div>
        <p>Mentor Name:</p>
        <input
          name="mentorName"
          value={this.state.mentorName}
          onChange={this.onChange}
          type="text"
        />
        <p>Age:</p>
        <input
          name="mentorAge"
          value={this.state.mentorAge}
          onChange={this.onChange}
          type="text"
        />
        <p>Task:</p>
        <ToDoMain
          todos={this.state.todos}
          AddTask={this.AddTask}
          DelTask={this.DelTask}
        />
        <button className="submit btn btn-primary btn-margin" onClick={this.onSubmitClick}>
          Submit
        </button>
        {
          this.state.isMentorSaved && <h1>Mentor Saved SuccessFully</h1>
        }
      </div>
    );
  }
}
