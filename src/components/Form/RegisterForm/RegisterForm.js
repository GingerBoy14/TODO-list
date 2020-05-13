import React from "react";

const RegisterForm = () =>{

    return(
        <div id="regis" className="container tab-pane fade ">
            <form>
                <div className="form-group">
                    <label htmlFor="InputName">Full Name</label>
                    <input type="text" className="form-control is-valid" id="InputName" placeholder="Full Name"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                        anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="InputUsername">Username</label>
                    <input type="text" className="form-control is-valid" id="InputUsername"
                           placeholder="Username"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                        anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput2">Email address</label>
                    <input type="email" className="form-control is-valid" id="exampleFormControlInput2"
                           placeholder="name@example.com"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                        anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Password</label>
                    <input type="password" className="form-control is-invalid" id="exampleInputPassword2"
                           placeholder="Password"/>
                    <small id="emailHelp" className="form-text text-muted">Password incorrect.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPasswordVer">Verify Password</label>
                    <input type="password" className="form-control is-invalid" id="exampleInputPasswordVer"
                           placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};
export default RegisterForm;