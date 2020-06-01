import React, {useEffect, useRef, useState} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Route, Switch, Redirect, withRouter} from "react-router-dom";

import "./Form.css"

import Nav from "../../components/Tabs"
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Form = ({ match, location }) =>{
    const [ menuHeight, setMenuHeight ] = useState(null);
    const [ activeTab, setActiveTab ] = useState(true);
    const dropdownRef = useRef(null);
    const animationClassNames =
        activeTab ? "slide-to-login" : "slide-to-reg";

    useEffect(() => {
        setActiveTab(!activeTab);
    }, [location.pathname]);
    const calcHeight = (el) =>{
        setMenuHeight(el.offsetHeight);
    };
    return(
        <div className="login-register-form">
            <Nav activeTab={activeTab}/>
            <TransitionGroup
                className="transition-div"
                style={{ height: menuHeight }}
                ref={dropdownRef}
                childFactory={child =>
                    React.cloneElement(child, {
                        classNames: animationClassNames
                    })
                }>
                <CSSTransition
                    key={location.key}
                    timeout={330}
                    classNames={animationClassNames}
                    onEnter={calcHeight}>
                    <Switch location={location}>
                        <Route path={`${match.path}login`} component={LoginForm}/>
                        <Route path={`${match.path}register`} component={RegisterForm}/>
                        <Redirect to={`${match.path}login`}/>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default withRouter(Form);