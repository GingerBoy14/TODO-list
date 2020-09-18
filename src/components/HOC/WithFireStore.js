import React from "react";
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import {Provider} from "react-redux";
import * as firebase from "firebase";
import store from "../../redux/store";
import {createFirestoreInstance} from "redux-firestore";

const config = {
    useFirestoreForProfile: true,
    userProfile: 'users',
    attachAuthIsReady: true,
};

const rfProps = {
    firebase,
    config: config,
    dispatch: store.dispatch,
    createFirestoreInstance,
};
const WithFireStore = ({children}) =>(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rfProps}>
            {children}
        </ReactReduxFirebaseProvider>
    </Provider>
);



export default WithFireStore;
