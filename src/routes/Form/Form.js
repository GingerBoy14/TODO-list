import React from "react";


import Nav from "../../components/Tabs"
import TabContent from "../../components/TabContent";

import "./Form.scss"

const Form = ({ animationClassNames }) =>(
        <div className="login-register-form-wrapper">
            <div className="login-register-form">
                <Nav/>
                <TabContent animationClassNames={animationClassNames}/>
            </div>
        </div>
    );

export default Form;