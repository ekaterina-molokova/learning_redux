import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './ToDoList.css';
import ToDo from './ToDo';
import './Form.css';

function ToDoList({ store, todos }) {
    const [inputValue, setInputValue] = useState({
        task: ''
    })

    useEffect(() => {
    }, [todos])

    function handleSubmit(e) {
        e.preventDefault();
        store.dispatch({
            type: 'ADD',
            task: inputValue.task
        })
        e.target.reset()
    }

    function handleChange(e) {
        setInputValue({
            task: e.target.value
        })
    }

    function deleteToDo(e) {
        store.dispatch({
            type: 'DELETE',
            id: e.target.closest('li').id
        })
        e.target.closest('li').remove()
    }

    return (
        <>
            <ol className='todo-list'>
                {todos.length < 1
                    ? <p className='notice'>No tasks</p>
                    : todos.map(( { task, id }) =>
                        <ToDo task={task} key={id} id={id} remove={deleteToDo} />
                        )}
            </ol>
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
                >
                    Add a to-do
                </button>
            </form>
        </>
    );
}

function mapStateToProps(reduxState) {
    return {
        todos: reduxState.todos
    }
}

export default connect(mapStateToProps) (ToDoList);
