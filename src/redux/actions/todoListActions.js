import {
    FETCH_DATA_FAILURE,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS
} from "../types";

const dataRequested = () =>{
    return {
        type: FETCH_DATA_REQUEST
    };
};
const dataLoaded = (todos) =>{
    return{
        type: FETCH_DATA_SUCCESS,
        payload: todos
    }
};
const dataError = ( error ) =>{
    return{
        type: FETCH_DATA_FAILURE,
        payload: error
    }
};

export const fetchData = (products,categories) => (dispatch, getState, {todoService}) =>{
    dispatch(dataRequested());
    todoService.setData(products,categories)
        .then((data) => dispatch(dataLoaded(data)))
        .catch((error) => dispatch(dataError(error)));
};
