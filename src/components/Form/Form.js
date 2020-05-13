import React from "react";
import "./Form.css"
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";

const Form = () =>{
    return(
        <div className="content">
            <Nav/>
            <div className="tab-content">
                <LoginForm/>
                <RegisterForm/>
            </div>
        </div>
    );
};

const Nav = () =>{
  return(
      <nav>
          <ul className="nav nav-pills" role="tablist">
              <li className="nav-item active" >
                  <a className="nav-link active" data-toggle="pill" href="#login">Login</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#regis">Register</a>
              </li>
          </ul>
      </nav>
  );
};

export default Form;