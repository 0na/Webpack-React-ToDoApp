import React from 'react';
// import './Todo.css';

const todo = (props) => ( <
    li className = "todo" >
    <
    span className = "todoName" > {
        props.name
    } < /span> <
    span className = "todoButton" > < button onClick = {
        () => props.removetodo(props.id)
    } > X < /button></span >
    <
    /li>
);

export default todo;