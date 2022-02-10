import React from 'react';
import './ToDo.css';

function ToDo({task, remove}) {
    return (
        <li className='todo-item'>
            {task}
            <button type='reset' className='' onClick={(e) => remove(e)}>Del</button>
        </li>
    );
}

export default ToDo;
