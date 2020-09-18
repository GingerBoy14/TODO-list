import {FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS} from "../types";

export const fetchData = (state, action) =>{
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return {
                todos: action.payload,
                loading: false,
                error: null
            };
        case FETCH_DATA_REQUEST:
            return {
                todos: [],
                loading: true,
                error: null
            };
        case FETCH_DATA_FAILURE:
            return {
                todos: [],
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
