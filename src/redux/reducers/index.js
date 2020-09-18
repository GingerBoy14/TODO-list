import { combineReducers } from "redux";

import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from 'react-redux-firebase'
import {todoListReducer} from "./todoListReducer";

const rootReducer = combineReducers({
    todoList:todoListReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;