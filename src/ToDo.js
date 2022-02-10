import React from 'react';
import './ToDo.css';

function ToDo({task, remove}) {
    return (
        <li className='todo-item'>
            {task}
            <button
                type='reset'
                className='deleteButton'
                onClick={(e) => remove(e)}
            >
                Delete
            </button>
        </li>
    );
}

export default ToDo;
