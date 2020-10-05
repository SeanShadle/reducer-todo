export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }
];

export const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case "ADD_ITEM":
            return[
                ...state,
                {
                item: action.payload,
                completed: false
                },
            ];
        case "TOGGLE_COMPLETED":
            return state.map(todo => {
                return todo.id === action.id
                ? {...todo, completed: !todo.completed}
                : todo;
            });
        case "REMOVE_TODO":
            return state.filter(todo => !todo.completed);
        default:
            return state;
    }
};