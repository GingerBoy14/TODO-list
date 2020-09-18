import React from "react";
import {withRouter} from "react-router-dom";
import {useFirebase} from "react-redux-firebase";
import {RegisterForm} from "../components/Forms";
const createNewUser = (firebase,{ email, password, username }) => {
    firebase.createUser(
        { email, password },
        { username, email }
    )
}
const FormContainer = ({history}) =>{
    const firebase = useFirebase();
    const handleSubmit = (e, userData) =>{
        e.preventDefault();
        console.log(firebase,userData);
        createNewUser(firebase, userData)
            .then((user)=>console.log(user))
            .catch((err)=>console.log(err));
        history.push("/todoApp")
    };
    return <RegisterForm handleSubmit={handleSubmit}/>
}

export default withRouter(FormContainer);