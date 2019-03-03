import React from "react";
import Todo from "./Todo";
//import style from "./TodoList.css";

const TodoList = props => ( <
  ul > {
    props.data.map((data, i) => ( <
      Todo key = {
        i
      }
      id = {
        data.id
      }
      name = {
        data.text
      }
      removeTodo = {
        props.removeTodo
      }
      />
    ))
  } <
  /ul>
);

export default TodoList;