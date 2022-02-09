import React from 'react';
import './ToDo.css';

function ToDo({task}) {
    return (
        <li className='todo-item'>{task}</li>
    );
}

export default ToDo;
