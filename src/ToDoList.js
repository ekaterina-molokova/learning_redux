import React, { useState } from 'react';
import { connect } from 'react-redux';
import './ToDoList.css';
import ToDo from './ToDo';

function ToDoList({}) {
    const [initialState, setInitialState] = useState({
        todos: ['Run', 'Eat', 'Learn']
    })
    return (
        <ul className='todo-list'>
            {initialState.todos.map((task, index) => <ToDo task={task} key={index}></ToDo>)}
        </ul>
    );
}

export default connect() (ToDoList);
