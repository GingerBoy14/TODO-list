import React, {useState} from "react";
import "./Form.css"

import Nav from "./Tabs"
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";

const Form = () =>{
    const [id,setId] = useState(1);
    const changeContent = (contentId) =>{
        switch (contentId) {
            case 1:{
                setId(1);
                break;
            }
            case 2:{
                setId(2);
                break;
            }
            default: setId(1);
        }
    };
    const content = id===1 ? <LoginForm/> : <RegisterForm/>;
    return(
        <div className="login-register-form">
            <Nav changeContent={(id)=>changeContent(id)}/>
            <div className="tab-content">
                {content}
            </div>
        </div>
    );
};

export default Form;