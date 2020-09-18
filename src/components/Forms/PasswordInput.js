import React, {useState} from "react";

const PasswordInput = ({onChange, changedField}) => {
    const [showPassword, setShowPassword] = useState(false);

    return(
        <div className="form-group">
            <label htmlFor="regInputPassword">Password</label>
            <div className="password-input-wrapper">
                <input type={showPassword ? 'text' : 'password'}
                       className="form-control"
                       id="regInputPassword"
                       placeholder="Password"
                       onInput={onChange ? (e) => onChange(e, changedField) : null}/>
                <i className={`show-password-icon far fa-eye ${showPassword ? 'active' : 'inactive'}`}
                   onClick={() => setShowPassword(!showPassword)}
                />
            </div>
            <small id="emailHelp" className="form-text text-muted">
                No one should know your password.
            </small>
        </div>
    )
}

export default PasswordInput;
