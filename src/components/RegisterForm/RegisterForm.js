import React from "react";
import {withRouter} from "react-router-dom";

const RegisterForm = ({ history, animation}) =>{
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("ok");
        history.push("/todoApp")
    };
    return(
        <div className="container">
            <form style={animation} onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="InputUsername">Username</label>
                    <input type="text"
                           className="form-control"
                           id="InputUsername"
                           placeholder="Username"/>
                    <small id="emailHelp" className="form-text text-muted">It's your unique name in system.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="regEmailInput">Email address</label>
                    <input type="email"
                           className="form-control"
                           id="regEmailInput"
                           placeholder="name@example.com"/>
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="regInputPassword">Password</label>
                    <input type="password"
                           className="form-control"
                           id="regInputPassword"
                           placeholder="Password"/>
                    <small id="emailHelp" className="form-text text-muted">
                        No one should know your password.
                    </small>
                </div>

                <button type="submit"
                        className="btn submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
};
export default withRouter(RegisterForm);