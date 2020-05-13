import React from "react";

const LoginForm = () =>{
    return(
        <div id="login" className="container tab-pane active">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control is-valid" id="exampleFormControlInput1"
                           placeholder="name@example.com"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                        anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control is-invalid" id="exampleInputPassword1"
                           placeholder="Password"/>
                    <small id="emailHelp" className="form-text text-muted">Password incorrect.</small>
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    );
};

export default LoginForm;