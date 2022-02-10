import React, { useState } from 'react';
import { connect } from 'react-redux';
import './ToDoList.css';
import ToDo from './ToDo';
import './Form.css';
import { addToDo, deleteToDo } from './redux/actions/actionCreators';

function ToDoList(todos) {
    const [inputValue, setInputValue] = useState({
        task: ''
    })

    function handleSubmit(e) {
        e.preventDefault();
        // todos.todos.push(inputValue)
        todos.dispatch(addToDo(inputValue.task))
        // setInputValue({
        //     task: ''
        // })
        e.target.reset()
    }

    function handleChange(e) {
        setInputValue({
            task: e.target.value
        })
    }

    function deleteToDo(id) {
        console.log(id)
        // e.target.closest('li').remove()
        // todos.dispatch(deleteToDo(id))
    }

    return (
        <>
            <ol className='todo-list'>
                {todos.todos.length < 1
                    ? <span>There is nothing to do</span>
                    : todos.todos.map((task, index) =>
                        <ToDo task={task} key={index} remove={deleteToDo} />
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
    debugger
    return {
        todos: reduxState.todos
    }
}

export default connect(mapStateToProps, { addToDo, deleteToDo }) (ToDoList);
