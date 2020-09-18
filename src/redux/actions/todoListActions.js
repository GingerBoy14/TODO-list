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
const dataLoaded = (products) =>{
    return{
        type: FETCH_DATA_SUCCESS,
        payload: products
    }
};
const dataError = ( error ) =>{
    return{
        type: FETCH_DATA_FAILURE,
        payload: error
    }
};
