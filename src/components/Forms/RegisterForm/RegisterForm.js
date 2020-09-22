import React from "react";

import FormGroup from "../FormGroup";
import PasswordInput from "../PasswordInput";

import "./RegisterForm.scss";


const RegisterForm = ({onSubmit,handleSubmit,register, errors}) =>(
        <>
            <form  onSubmit={handleSubmit(onSubmit)}>

                <FormGroup
                    id="userNameInput"
                    placeholder="Username"
                    inputType="text"
                    inputName="username"
                    ref={register({required: false})}
                    errors={errors.username}>
                    <label htmlFor="regEmailInput">Username</label>
                    <small id="userNameHelp" className="form-text text-muted">
                        {errors.username ? errors.username.message : 'It\'s your unique name in system.'}
                    </small>
                </FormGroup>

                <FormGroup
                    id="regEmailInput"
                    placeholder="name@example.com"
                    inputType="email"
                    inputName="email"
                    ref={register({
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })}
                    errors={errors.email}>
                    <label htmlFor="regEmailInput">Email address</label>
                    <small id="emailHelp" className="form-text text-muted">
                        {errors.email ? errors.email.message : 'We\'ll never share your email with anyone else.'}
                    </small>
                </FormGroup>

                <PasswordInput
                    inputName="password"
                    ref={register({
                        required: "Required",
                        pattern: {
                            value: /^[\w\d]+$/i,
                            message: "Password must contains only characters and digits"
                        },
                        minLength: {
                            value: 6,
                            message: "Password must contains at least 6 characters."
                        }
                    })}
                    errors={errors.password}/>

                <button type="submit"
                        className="btn submit-btn">
                    Submit
                </button>
            </form>
        </>
    );


export default RegisterForm;