import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import {Form} from "../routes";

const FormContainer = ({location}) =>{
    const [ activeTab, setActiveTab ] = useState(location.pathname.split("/user/")[1] === "login");
    //change the content
    useEffect(() => {
        setActiveTab(!activeTab);
    }, [location.pathname, setActiveTab]);

    const animationClassNames =
        activeTab ? "slide-to-login" : "slide-to-reg";

    return <Form animationClassNames={animationClassNames}/>
}

export default withRouter(FormContainer);