import React, {useState} from "react";
import "./Form.css"

import Nav from "../../components/Tabs"
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Form = () =>{
    const [id,setId] = useState(1);
    const changeContent = (contentId) =>{
        switch (contentId) {
            case 'login':{
                setId(1);
                break;
            }
            case 'reg':{
                setId(2);
                break;
            }
            default: setId(1);
        }
    };
    const showAnimation = { animation:' content normal 0.3s ease-in-out 1 '};
    const content = id===1 ? <LoginForm animation={showAnimation}/> : <RegisterForm animation={showAnimation}/>;
    return(
        <div className="login-register-form">
            <Nav changeContent={(id)=>changeContent(id)}/>
            <div className="tab-content" >
                {content}
            </div>
        </div>
    );
};

export default Form;