import React, { Component } from "react";
import Select from "react-select";
import ToDoMain from "./ToDoMain";
import uuid from "uuid";
import axios from "axios";
import _ from "lodash";
import "../App.css";


export default class ManageMentor extends Component {
  constructor() {
    super();
    this.state = {
      mentorData: [],
      todos: [],
      selectedMentorId: "",
      isMentorUpdated: false
    };
  }
  componentDidMount = () => {
    axios.get('http://localhost:8999/fetchAllMentors')
      .then(res => {
        console.log(res);
        this.setState({
          mentorData: res.data
        })
      }).catch(error => {
        console.log(error);
      })
  }

  DelTask = id => {

    this.setState({ 
      todos: this.state.todos.filter(todo => todo.id !== id)

    });
  };

  AddTask = title => {
    if (title) {
      const newTodo = {
        id: uuid.v4(),
        taskName: title
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    }
  };

  onChange = selectedValue => {
    let mentor = _.find(this.state.mentorData, data => data.mentorName === selectedValue.value)
    this.setState({
      todos: mentor.tasks,
      selectedMentorId: mentor.mentorId
    })
  };

  onSubmitClick = () => {
    //axios call to update the mentor details
    axios({
      method: 'patch',
      url: `http://localhost:8999/updateMentors/${this.state.selectedMentorId}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        tasks: this.state.todos
      }
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({
      isMentorUpdated: true,
    })
  };

  render() {
    return (
      <div>
        <Select options={this.state.mentorData.map(obj => {
          return ({
            value: obj.mentorName, label: obj.mentorName
          })
        })}
          onChange={this.onChange} />
        <ToDoMain
          todos={this.state.todos}
          AddTask={this.AddTask}
          DelTask={this.DelTask}
        />
        <button className="submit btn btn-primary btn-margin" onClick={this.onSubmitClick}>
          Submit
        </button>
        {this.state.isMentorUpdated && <h1>Mentor Updated Successfully.</h1>}
      </div>
    );
  }
}
