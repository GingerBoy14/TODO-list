import React from "react";
import { withRouter } from "react-router-dom";
import "./LoginForm.css"

const LoginForm = ({ history }) =>{
    const handleSubmit = (event) =>{
        event.preventDefault();
        history.push("/todoApp");
    };
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="logEmailInput">Email address</label>
                    <input type="email"
                           className="form-control"
                           placeholder="name@example.com"
                           id="logEmailInput"/>
                    <small className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="regInputPassword">Password</label>
                    <input type="password"
                           className="form-control"
                           id="regInputPassword"
                           placeholder="Password"/>
                    <small className="form-text text-muted">
                        No one should know your password.
                    </small>
                </div>
                <button type="submit"
                        className="btn submit-btn">
                    Submit
                </button>
            </form>
        </>
    );
};

export default withRouter(LoginForm);