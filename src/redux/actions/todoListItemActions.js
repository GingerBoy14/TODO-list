import {
    ADD_TODO,
    DELETE_TODO,
    TODO_TOGGLE_PINTOTOP,
    TODO_TOGGLE_IMPORTANT,
    TODO_TOGGLE_DONE
} from "../types";

const addTodo = (text) =>{
    return {
        type: ADD_TODO,
        payload: text
    };
};
const deleteTodo = (todoId) =>{
    return {
        type: DELETE_TODO,
        payload:todoId
    };
};
const togglePinToTop = (todoId) =>{
    return {
        type: TODO_TOGGLE_PINTOTOP,
        payload:todoId
    };
};
const toggleImportant = (todoId) =>{
    return {
        type: TODO_TOGGLE_IMPORTANT,
        payload:todoId
    };
};
const toggleDone = (todoId) =>{
    return {
        type: TODO_TOGGLE_DONE,
        payload:todoId
    };
};


export {
    addTodo,
    deleteTodo,
    toggleDone,
    toggleImportant,
    togglePinToTop
}

