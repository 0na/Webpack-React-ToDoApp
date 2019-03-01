import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "../components/Title";
//import TodoForm from "../components/TodoForm.js";
import TodoList from "../components/TodoList.js";

class App extends Component {
  constructor(props) {
    super(props);
    //Wypełnij też this.state.data przykładowymi danymi
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
    const todo = {
      text: val,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({
      data
    });
  }
  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({
      data: remainder
    });
  }
  render() {
    return (
      <div className={style.TodoApp}>
        <Title left={this.state.left} />
        <TodoList left={this.state.TodoList} />
        // Tutaj pojawią się komponenty{" "}
      </div>
    );
  }
}

export default App;
