import React, {useState} from 'react';
import { connect } from 'react-redux';
import './ToDoList.css';
import ToDo from './ToDo';
import './Form.css';

function ToDoList(props) {
    debugger;
    const [inputValue, setInputValue] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        props.dispatch({
            type: 'ADD',
            task: inputValue
        })
        setInputValue('')
    }

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    return (
        <>
            <ul className='todo-list'>
                {props.todos.map((task, index) => <ToDo task={task} key={index}></ToDo>)}
            </ul>
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <label className='label' htmlFor='to-do'>Task:</label>
                <input
                    className='input'
                    type='text'
                    name='task'
                    id='task'
                    placeholder='What would you like to do?'
                    onChange={(e) => handleChange(e)}
                />
                <span className='error'>Input couldn't be empty</span>
                <button
                    type='submit'
                    className='addButton'
                    onClick={(e) => handleSubmit(e)}
                >
                    Add a to-do
                </button>
            </form>
        </>
    );
}

function mapStateToProps(reduxState) {
    debugger;
    return {
        todos: reduxState.todos
    }
}

export default connect(mapStateToProps) (ToDoList);
