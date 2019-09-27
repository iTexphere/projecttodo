const initialState = {
    todos:[],
    changes :false,
    isLogin :false
};

const reducer = (state=initialState, action) => {

    switch(action.type){
            case 'LOGIN': 
                let loginSuccess=false
                    if(action.value.username=='chathura' && action.value.password=='efuture'){
                        loginSuccess=true
                    }
                    return { 
                        ...state,
                        isLogin: loginSuccess
                    }
        
            case 'ADD_TODO': 
                    return { 
                        ...state,
                        todos: state.todos.concat(action.value)
                    }
            case 'COMPLETE_TODO' :
                 state.todos[state.todos.findIndex((obj => obj.id == action.value))].completed = true         
                    return {
                        ...state,
                        todos: state.todos,
                        changes :!state.changes
                    }
       }

    return state;
};

export default reducer;