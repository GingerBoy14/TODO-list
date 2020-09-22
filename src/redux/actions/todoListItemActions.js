import {
    ADD_TODO,
    DELETE_TODO,
    TODO_TOGGLE_PINTOTOP,
    TODO_TOGGLE_IMPORTANT,
    TODO_TOGGLE_DONE
} from "../types";

const addTodoAction = (data) =>{
    return {
        type: ADD_TODO,
        payload: data
    };
};
const addTodo = (text) => (dispatch, getState, {todoService}) =>{
    const data = {text, pinToTop:false, important:false, done:false}
    const userId = getState().firebase.auth.uid;
    todoService.addTodo(data,userId)
        .then(({id}) => dispatch(addTodoAction({text, id})))
};

const deleteTodo = (todoId) =>{
    return {
        type: DELETE_TODO,
        payload: todoId
    };
};
const togglePinToTop = (todoId) =>{
    return {
        type: TODO_TOGGLE_PINTOTOP,
        payload: todoId
    };
};
const toggleImportant = (todoId) =>{
    return {
        type: TODO_TOGGLE_IMPORTANT,
        payload: todoId
    };
};
const toggleDone = (todoId) =>{
    return {
        type: TODO_TOGGLE_DONE,
        payload: todoId
    };
};


export {
    addTodo,
    deleteTodo,
    toggleDone,
    toggleImportant,
    togglePinToTop
}

