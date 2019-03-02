import React, { Component } from "react";
import style from "./App.css";
import uuid from "uuid";
import Title from "../components/Title";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import Todo from "../components/Todo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          text: "clean room"
        },
        {
          id: 2,
          text: "wash the dishes"
        },
        {
          id: 3,
          text: "feed my cat"
        }
      ]
    };
  }
  addTodo(val) {
    const Todo = {
      text: val,
      id: uuid.v4()
    };
    this.setState({
      data: [...this.state.data, Todo]
    });
  }
  removeTodo(id) {
    this.setState({
      data: [...this.state.data.filter(Todo => Todo.id !== id)]
    });
  }
  render() {
    return (
      <div className={style.TodoApp}>
        <Title title={"Things to do"} />{" "}
        <TodoForm addTodo={this.addTodo.bind(this)} />{" "}
        <TodoList
          data={this.state.data}
          removeTodo={this.removeTodo.bind(this)}
        />{" "}
      </div>
    );
  }
}

export default App;
