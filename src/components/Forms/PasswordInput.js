import React, {forwardRef, useState} from "react";

const PasswordInput = forwardRef(({inputName, errors},ref) => {
    const [showPassword, setShowPassword] = useState(false);
    return(
        <div className="form-group">
            <label htmlFor="regInputPassword">Password</label>
            <div className="password-input-wrapper">
                <input type={showPassword ? 'text' : 'password'}
                       ref={ref}
                       name={inputName}
                       className={`form-control ${errors ? 'error' : ''}`}
                       id="regInputPassword"
                       placeholder="Password"/>
                <i className={`show-password-icon far fa-eye ${showPassword ? 'active' : 'inactive'}`}
                   onClick={() => setShowPassword(!showPassword)}
                />
            </div>

            <small id="emailHelp" className="form-text text-muted">
                {errors ? errors.message : 'No one should know your password.'}
            </small>
        </div>
    )
});

export default PasswordInput;
