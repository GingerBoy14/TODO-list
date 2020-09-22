import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import {reduxFirestore, getFirestore} from "redux-firestore";
import {firebase} from "../service";
import rootReducer from './reducers';
import thunk from "redux-thunk";
import TodoService from "../service/TodoService";

const todoService = new TodoService(firebase);

const dbMiddleware = compose(
    reduxFirestore(firebase),
    applyMiddleware(
        thunk.withExtraArgument({ getFirestore, todoService}),
        thunkMiddleware,
        logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(rootReducer, dbMiddleware);
export default store;