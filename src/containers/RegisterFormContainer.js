import React from "react";
import {withRouter} from "react-router-dom";
import {useFirebase} from "react-redux-firebase";
import {RegisterForm} from "../components/Forms";
import {useForm} from "react-hook-form";

const createNewUser = (firebase,{ email, password, username }) => {
   return firebase.createUser(
        { email, password },
        { username, email }
    )
}

const RegisterFormContainer = ({history}) =>{
    const firebase = useFirebase();
    const { handleSubmit, register, errors, setError } = useForm({ criteriaMode:'all' });

    const onSubmit = (userData) =>{

        console.log(firebase,userData);
        createNewUser(firebase, userData)
            .then((user)=>{
                console.log(user);
                history.push("/todoApp")
            })
            .catch(()=>setError("email",{
                message:"The email address is already in use."
            }));

    };
    return <RegisterForm onSubmit={onSubmit} handleSubmit={handleSubmit} register={register} errors={errors}/>
}

export default withRouter(RegisterFormContainer);