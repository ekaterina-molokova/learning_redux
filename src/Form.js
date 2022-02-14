import React, { useState } from 'react';
import './Form.css';

function Form({ props }) {
    const [inputValue, setInputValue] = useState({
        task: ''
    })

    function handleSubmit(e) {
        e.preventDefault();
        props.dispatch({
            type: 'ADD',
            task: inputValue.task
        })
        setInputValue({
            task: ''
        })
    }

    function handleChange(e) {
        setInputValue({
            task: e.target.value
        })
    }

    return (
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
    );
}

export default Form;
