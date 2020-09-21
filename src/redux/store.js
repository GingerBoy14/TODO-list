import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import {getFirebase} from "react-redux-firebase";
import {reduxFirestore, getFirestore} from "redux-firestore";
import {firebase} from "../service";
import rootReducer from './reducers';
import thunk from "redux-thunk";

const dbMiddleware = compose(
    reduxFirestore(firebase),
    applyMiddleware(
        thunkMiddleware,
        thunk.withExtraArgument({getFirebase, getFirestore}),
        logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(rootReducer, dbMiddleware);
export default store;