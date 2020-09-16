import React, {useEffect, useState} from "react";
import { withRouter } from "react-router-dom";

import Nav from "../../components/Tabs"
import TabContent from "../../components/TabContent";

import "./Form.scss"

const Form = ({ location }) =>{
    const [ activeTab, setActiveTab ] = useState(location.pathname.split("/user/")[1] === "login");
    //change the content
    useEffect(() => {
        setActiveTab(!activeTab);
    }, [location.pathname,setActiveTab]);

    const animationClassNames =
        activeTab ? "slide-to-login" : "slide-to-reg";

    return(
        <div className="login-register-form-wrapper">
            <div className="login-register-form">
                <Nav/>
                <TabContent animationClassNames={animationClassNames}/>
            </div>
        </div>
    );
};

export default withRouter(Form);