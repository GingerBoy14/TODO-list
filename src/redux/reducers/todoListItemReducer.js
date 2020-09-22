import {
    ADD_TODO,
    DELETE_TODO,
    TODO_TOGGLE_PINTOTOP,
    TODO_TOGGLE_IMPORTANT,
    TODO_TOGGLE_DONE
} from "../types";

const addItem = ({id, text}) =>{
    return{
        id,
        text,
        pinToTop:false, important:false, done:false
    };
}
const delItem = (todos, todoId) =>{
    return{
        ...todos.slice(0, todoId),
        ...todos.slice(todoId+1)
    };
}

const toggleStatus = (todos, todoId, status) =>{
    const item = todos.find(({id})=>id===todoId);
    return[
        ...todos,
        {...item, [status]: !item[status]}
    ]
}



export const todoListItemReducer = (state, {payload, type}) =>{
    if (!state){
        return [{id:0, text: '', pinToTop:false, important:false, done:false}]
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
            return toggleStatus(state, payload, "pinToTop");
        case TODO_TOGGLE_IMPORTANT:
            return toggleStatus(state, payload, "important")
        case TODO_TOGGLE_DONE:
            return toggleStatus(state, payload, "done")

        default:
            return state;
    }
};


