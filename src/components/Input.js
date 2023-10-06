import React, { useState } from 'react'
import './Input.css';

import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';

// import { todoList } from '../features/todoSlice';

const Input = () => {

    const [input, setInput] = useState('')
    
    const dispatch = useDispatch()

    const addTodo = e => {
        if (input !== '' && e.key === 'Enter') {
            e.preventDefault();
            
            dispatch(saveTodo({
                item: input,
                done: false,
                id: Date.now(),
            }));
            
            setInput('');            
        }
    }

    return (
        <div className='Input'>
            <input 
                type='text' 
                placeholder='write and press enter'
                onChange={e=>setInput(e.target.value)} 
                onKeyPress={addTodo}
                value={input}
            />
        </div>
    )
}

export default Input;
