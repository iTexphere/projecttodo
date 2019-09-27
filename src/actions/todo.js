
export const addToDoAsyn = (newTodo) =>{
    return {
        type: "ADD_TODO", 
        value: newTodo
    }

}
export const addToDo = newTodo =>{
    return dispatch => {
        setTimeout(() => {
            dispatch(addToDoAsyn(newTodo))
        }, 100);
    }
}
