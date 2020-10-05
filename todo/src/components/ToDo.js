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
    }

return(
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
        <button onClick={() => dispatch({type: "ADD_ITEM", payload: newToDo, })}>Add Item</button>
        <button>Clear Completed</button>
    </div>
    </form>
)
}

export default ToDo;