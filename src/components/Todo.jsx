import React from "react";

const Todo = props => (
  <div className="Todo">
    <p className="TodoText">{props.text}</p>
    <p className="TodoButton">
      <button onClick={() => props.removeTodo(props.id)}>Usuń</button>
    </p>
  </div>
);

export default Todo;
