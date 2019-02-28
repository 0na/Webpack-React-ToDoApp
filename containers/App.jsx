import React from "react";
import ReactDOM from "react-dom";
import uuid from "uuid"; //trzeba zainstalowac przez npm  npm install --save uuid
import style from "./App.css"; //importuje z pliku css z tego samego folderu

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  // metoda  addTodo do dodawania nowych elementów do kolekcji
  addTodo(val) {
    const todo = {
      text: val,
      // biblioteki uuid, dzięki której możliwe jest tworzenie unikatowych wartości
      //npm install --save uuid
      id: uuid.v4() //Przy użyciu metody uuid.v4() tworzymy unikatową kombinację cyfr i liczb i przypisujemy ją do klucza id
    };
    //1. użycie zmiennej typu const, aby upewnić się, że zmienna nigdy nie będzie nadpisywana,/2/ operator spread na tablicy (this.state.data) i jednoczesne stworzenie nowej tablicy z dodatkowym elementem na końcu (todo). Ten zabieg to sprytna konstrukcja, pełniąca rolę metody push, ale działa bez modyfikowania stanu,
    //3. korzystanie ze skróconego zapisu obiektu. Zamiast pisać { data: data }, zastosowaliśmy samo { data }. ES6 bez problemu zrozumie taką składnię i będzie wiedział, że tak naprawdę chodzi o { data: data }.
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
    //W ES5 var remainder = this.state.data.filter(function(todo) {return todo.id !== id;});
  }
  //metoda render, która wyświetli całą naszą aplikację:
  render() {
    return (
      <div
        className={
          style.TodoApp //uzycie loadera CSS
        }
      >
        Tutaj pojawią się komponenty naszej aplikacji.{" "}
      </div>
    );
  }
}

export default App;

var app = React.createElement(App);

ReactDOM.render(app, document.getElementById("app"));
