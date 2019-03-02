import React from "react";
// import './Todo.css';

const Todo = props => (
  <li className='Todo'>
    <span> {props.name} </span>
    <span>
      <button onClick={() => props.removeTodo(props.id)}> X </button>
    </span>
  </li>
);

export default Todo;

//chyba ok, nie ruszac
