import {
    FETCH_DATA_FAILURE,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,

    ADD_TODO,
    DELETE_TODO,
    TODO_TOGGLE_PINTOTOP,
    TODO_TOGGLE_IMPORTANT,
    TODO_TOGGLE_DONE
} from "../types";

import {fetchData} from "./fetchData";
import {todoListItemReducer} from "./todoListItemReducer";

export const todoListReducer = (state, action) =>{
    if (state === undefined){
        return {
            todos: [],
            loading: true,
            error: null
        }
    }
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
        case FETCH_DATA_REQUEST:
        case FETCH_DATA_FAILURE:
            return fetchData(state, action);

        case ADD_TODO:
        case DELETE_TODO:
        case TODO_TOGGLE_PINTOTOP:
        case TODO_TOGGLE_IMPORTANT:
        case TODO_TOGGLE_DONE:
            return {
                    ...state,
                    todos: todoListItemReducer(state.todos, action)
                }

        default:
            return state;
    }
};


