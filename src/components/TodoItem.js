//Snippet = rafce
import React from 'react';
import './TodoItem.css';
import Checkbox from '@material-ui/core/Checkbox';

import { useDispatch } from 'react-redux'
import { setCheck, removeTodo } from '../features/todoSlice'

const TodoItem = ({name, done, id}) => {

    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(setCheck(id))
    };

    const handleRemove = () => {
        dispatch(removeTodo(id))
    };

    return (
        <div className='todoItem'>

            <Checkbox
                checked={done}
                color='primary'
                onChange={handleCheck}
                inputProps={{ 'aria-label':'secondary checkbox' }}
            />

            <p className={done && 'todoItem--done'}> { name } </p>

            <button onClick={handleRemove}> X </button>
            
        </div>
    )
}

export default TodoItem;
