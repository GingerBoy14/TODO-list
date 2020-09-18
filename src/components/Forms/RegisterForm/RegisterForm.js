import React, {useState} from "react";

import FormGroup from "../FormGroup";
import PasswordInput from "../PasswordInput";

import "./RegisterForm.scss";


const RegisterForm = ({ handleSubmit }) =>{
    const [userData, setUserData] = useState({});

    const onChangeInput = (e, value) => setUserData({...userData, [value]:e.target.value})
    console.log(userData)
    return(
        <>
            <form  onSubmit={(e)=>handleSubmit(e, userData)}>

                <FormGroup
                    id="userNameInput"
                    placeholder="Username"
                    inputType="text"
                    changedField="username"
                    onChange={onChangeInput}>
                    <label htmlFor="regEmailInput">Username</label>
                    <small id="userNameHelp" className="form-text text-muted">
                        It's your unique name in system.
                    </small>
                </FormGroup>

                <FormGroup
                    id="regEmailInput"
                    placeholder="name@example.com"
                    inputType="email"
                    changedField="email"
                    onChange={onChangeInput}>
                    <label htmlFor="regEmailInput">Email address</label>
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </FormGroup>

                <PasswordInput onChange={onChangeInput} changedField="password"/>

                <button type="submit"
                        className="btn submit-btn">
                    Submit
                </button>
            </form>
        </>
    );
};


export default RegisterForm;