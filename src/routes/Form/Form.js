import React, {useEffect, useRef, useState} from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import "./Form.css"

import Nav from "../../components/Tabs"
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Form = ({ match, location }) =>{
    const [ menuHeight, setMenuHeight ] = useState(null);
    const [ activeTab, setActiveTab ] = useState(true);
    const dropdownRef = useRef(null);

    //change the content
    useEffect(() => {
        setActiveTab(state => !state);
    }, [location.pathname]);

    //calculate the height of content div when it change
    const calcHeight = (el) =>{
        setMenuHeight(el.offsetHeight);
    };

    const currentKey = location.pathname.split("/user/")[1];
    const animationClassNames =
        activeTab ? "slide-to-login" : "slide-to-reg";

    return(
        <div className="login-register-form">
            <Nav/>
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
                    key={currentKey}
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