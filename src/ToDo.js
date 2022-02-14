import React from 'react';
import './ToDo.css';

function ToDo({task, id, remove}) {
    return (
        <li className='todo-item' id={id}>
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
