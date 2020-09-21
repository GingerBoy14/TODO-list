import React,{useState} from "react";
import {withRouter} from "react-router-dom";
import {useFirebase} from "react-redux-firebase";
import {RegisterForm} from "../components/Forms";
const createNewUser = (firebase,{ email, password, username }) => {
   return firebase.createUser(
        { email, password },
        { username, email }
    )
}
const FormContainer = ({history}) =>{
    const firebase = useFirebase();
    const [error, setError] = useState();
    const handleSubmit = (userData) =>{

        console.log(firebase,userData);
        createNewUser(firebase, userData)
            .then((user)=>{
                console.log(user);
                history.push("/todoApp")
            })
            .catch((err)=>setError(err));

    };
    return <RegisterForm onSubmit={handleSubmit} loginError={error}/>
}

export default withRouter(FormContainer);