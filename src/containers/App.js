import React from 'react';
import style from './App.css';
import uuid from 'uuid';
import Title from '../components/Title';
import TodoList from "../components/TodoList";
import todo from "../components/Todo";
import TodoForm from "../components/TodoForm";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [{
                    id: 1,
                    text: 'clean room'
                },
                {
                    id: 2,
                    text: 'wash the dishes'
                },
                {
                    id: 3,
                    text: 'feed my cat'
                }
            ]
        }
    }
    addtodo(val) {
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data, todo];
        this.setState({
            data
        });
    }
    removetodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({
            data: remainder
        });
    }
    render() {
        return ( <
            div className = {
                style.TodoApp
            } >
            <
            Title title = {
                'To do'
            }
            /> <
            TodoForm addtodo = {
                this.addtodo.bind(this)
            }
            /> <
            TodoList data = {
                this.state.data
            }
            removetodo = {
                this.removetodo.bind(this)
            }
            /> < /
            div >
        );
    }
}

export default App;