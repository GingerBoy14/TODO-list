import React from "react";
import {withRouter} from "react-router-dom";
import {useFirebase} from "react-redux-firebase";
import {LoginForm} from "../components/Forms";
import {useForm} from "react-hook-form";
const errorHandler = (err, setError) =>{
    switch (err.code){
        case "auth/user-not-found":{
            return setError("email",{
                type:"user-not-fund",
                message:"There is no user record corresponding to this identifier."
            })
        }
        case "auth/wrong-password":{
            return setError("password",{
                type:"wrong-password",
                message:"The password is invalid."
            })
        }
    }
}

const FormContainer = ({history}) =>{
    const firebase = useFirebase();
    const { handleSubmit, register, errors, setError} = useForm({ criteriaMode:'all' });

    const onSubmit = (userData) =>{
        firebase.login(userData)
            .then(()=>{
                history.push("/todoApp")
            })
            .catch((err)=>errorHandler(err, setError));

    };
    return <LoginForm onSubmit={onSubmit} handleSubmit={handleSubmit} register={register} errors={errors}/>
}

export default withRouter(FormContainer);