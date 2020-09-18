import {
    ADD_TODO,
    DELETE_TODO,
    TODO_TOGGLE_PINTOTOP,
    TODO_TOGGLE_IMPORTANT,
    TODO_TOGGLE_DONE
} from "../types";

const addItem = (text) =>{
        return{
            text,
            important: false,
            done: false,
            pinToTop: false
        };
}
const delItem = (todos, todoId) =>{
        return{
            ...todos.slice(0, todoId),
            ...todos.slice(todoId+1)
        };
}


export const todoListItemReducer = (state, {payload, type}) =>{
    if (state === undefined){
        return {
            id:0,
            text: '',
            status: ''
        }
    }
    switch (type) {
        case ADD_TODO:
            return [
                ...state,
                addItem(payload)
            ]
        case DELETE_TODO:
            return delItem(state, payload)
        case TODO_TOGGLE_PINTOTOP:
        case TODO_TOGGLE_IMPORTANT:
        case TODO_TOGGLE_DONE:

        default:
            return state;
    }
};


