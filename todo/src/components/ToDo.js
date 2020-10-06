import React, { useState, useReducer } from "react";

import { initialState, reducer } from "../reducers/ToDoReducer";

const ToDo = () => {
    const [newToDo, setNewTodo] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setNewTodo('')
    }

return(
    <div>
    <form onSubmit={handleSubmit}>
    <div>
        <h1>To Do List:</h1>
    </div>
    <div>
        <input 
            type="text"
            name="newToDo"
            value={newToDo}
            onChange={handleChanges}
        />
        <button onClick={() => dispatch({type: "ADD_ITEM", payload: newToDo })}>Add Item</button>
        <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: state})}>Clear Completed</button>
    </div>
    </form>
    <ul>
        {state.map(todo => (
            <li
                className={todo.completed ? 'completed' : ''}
                key={todo.id}
                onClick={()=> dispatch({type: "TOGGLE_ITEM", id: todo.id})}
            >
                {todo.item}
            </li>
        ))}
    </ul>
    </div>
)
}

export default ToDo;