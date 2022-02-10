import React, { useState } from 'react';
import { connect } from 'react-redux';
import './ToDoList.css';
import ToDo from './ToDo';

function ToDoList({todos}) {
    return (
        <ul className='todo-list'>
            {todos.map((task, index) => <ToDo task={task} key={index}></ToDo>)}
        </ul>
    );
}

function mapStateToProps(reduxState) {
    return {
        todos: reduxState.todos
    }
}

export default connect(mapStateToProps) (ToDoList);
