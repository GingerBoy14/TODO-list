import React, {useState} from "react";
import "./Form.css"
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
const Form = () =>{
    return(
        <div className="login-register-form">
            <Nav/>
            <div className="tab-content">

            </div>
        </div>
    );
};

const Nav = () =>{
    const [activate, setActive] = useState(true);
    const active = (activation) =>{
        if(!activation){
            return '';
        }else{
            return 'active';
        }
    };
    let sliderStyle;
    if(activate){
        sliderStyle={};
    }else{
        sliderStyle={
            transform:'translateX(100%)'
        }
    }
    return(
      <nav>
          <ul className="nav nav-pills" role="tablist">
              <li className="nav-item" >
                  <a
                      className={`nav-link ${active(activate)}`}
                      data-toggle="pill"
                      href="#login"
                      onClick={
                          ()=> setActive(true)
                      }>
                      Login
                  </a>
              </li>
              <li className="nav-item">
                  <a
                      className={`nav-link ${active(!activate)}`}
                      data-toggle="pill"
                      href="#login"
                      onClick={
                          ()=> setActive(false)
                      }
                  che>
                      Register</a>
              </li>
          </ul>
          <div className="slider" style={sliderStyle}>
              <div className="indicator"/>
          </div>
      </nav>
  );
};

export default Form;