import React from 'react';
import todo from './Todo';
// import './TodoList.css';

const TodoList = (props) => ( <
        ul className = "TodoList" > {
            props.data.map((data, i) => ( <
                    todo key = {
                        i
                    }
                    id = {
                        data.id
                    }
                    name = {
                        data.text
                    }
                    removeTodo = {
                        props.removetodo
                    }
                    />)
                )
            } <
            /ul>
        );

        export default TodoList;