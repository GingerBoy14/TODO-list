import React from "react";
import FormGroup from "../FormGroup";
import PasswordInput from "../PasswordInput";

const LoginForm = ({ onSubmit,handleSubmit,register, errors }) =>{

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup
                    id="logEmailInput"
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
                    ref={register({required: "Required"})}
                    errors={errors.password}/>

                <button type="submit"
                        className="btn submit-btn">
                    Submit
                </button>
            </form>
        </>
    );
};

export default LoginForm;