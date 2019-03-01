import React from "react";
//import style from "./TodoList.css";
import Todo from "./Todo";

//Dodaj logikę komponentu TodoList i przekaż do niego 2 parametry:
//Listę danych do wyświetlenia
//Metodę remove, która usunie kliknięty element todo
//Przy tworzeniu komponentu TodoList użyj komponentu prezentacyjnego (konstrukcja arrow function). Komponent ma za zadanie odebrać na wejściu listę rzeczy do zrobienia i odpowiednio wyświetlić każdy jej element.

const TodoList = props => (
  <ul className={"TodoList"}>
    {props.data.map(data => (
      <Todo
        // key={i} (musialoby byc {props.data.map(data,i} )
        id={data.id}
        text={data.text}
        removeTodo={props.removeTodo}
      />
    ))}
  </ul>
);

//Następnie wyeksportuj komponent na zewnątrz modułu przy użyciu słowa kluczowego export z ES6.
export default TodoList;
