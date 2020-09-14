import React, {useState} from "react";
import { withRouter } from "react-router-dom";

import "./RegisterForm.scss";

const RegisterForm = ({ history }) =>{
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("ok");
        history.push("/todoApp")
    };
    return(
        <>
            <form  onSubmit={handleSubmit}>

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
                    <div className="password-input-wrapper">
                        <input type={showPassword?'text':'password'}
                               className="form-control"
                               id="regInputPassword"
                               placeholder="Password"/>
                        <i className={`show-password-icon far fa-eye ${showPassword?'active':'inactive'}`}
                           onClick={()=>setShowPassword(!showPassword)}
                        />
                    </div>
                    <small id="emailHelp" className="form-text text-muted">
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
export default withRouter(RegisterForm);