import React from "react";
// import './Todo.css';

const Todo = props => (
  <li className='Todo'>
    <span className='TodoName'> {props.name} </span>{" "}
    <span className='TodoButton'>
      {" "}
      <button onClick={() => props.removeTodo(props.id)}> X </button>
    </span>
  </li>
);

export default Todo;
