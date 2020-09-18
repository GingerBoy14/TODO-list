import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import {reduxFirestore} from "redux-firestore";
import {firebase} from "../service";
import rootReducer from './reducers';

const dbMiddleware = compose(
    applyMiddleware(
        thunkMiddleware,
        logger),
    reduxFirestore(firebase)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(rootReducer, dbMiddleware);
export default store;