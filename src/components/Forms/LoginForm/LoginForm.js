import React from "react";
import { withRouter } from "react-router-dom";
import FormGroup from "../FormGroup";
import PasswordInput from "../PasswordInput";

const LoginForm = ({ history }) =>{
    const handleSubmit = (event) =>{
        event.preventDefault();
        history.push("/todoApp");
    };
    return(
        <>
            <form onSubmit={handleSubmit}>
                <FormGroup
                    id="logEmailInput"
                    placeholder="name@example.com"
                    inputType="email">
                    <label htmlFor="logEmailInput">Email address</label>
                    <small id="emailHelp" className="form-text text-muted">
                        It's your unique name in system.
                    </small>
                </FormGroup>

                <PasswordInput/>
                <button type="submit"
                        className="btn submit-btn">
                    Submit
                </button>
            </form>
        </>
    );
};

export default withRouter(LoginForm);