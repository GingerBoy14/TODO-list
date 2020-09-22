import React from "react";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import {withAnimateHeight} from "../HOC";
import {compose} from "../../utils";


import "./TabContent.scss"
import {
    RegisterFormContainer,
    LoginFormContainer
} from "../../containers";

const TabContent = ({ match, location, animationClassNames, calcHeight }) =>{
    const currentKey = location.pathname.split("/user/")[1]; // del /user/ from path
    return(
        <TransitionGroup
            childFactory={child =>
                React.cloneElement(child, {
                    classNames: animationClassNames
                })
            }
            component={null}>
            <CSSTransition
                key={currentKey}
                timeout={330}
                classNames={animationClassNames}
                onEnter={calcHeight}>
                <Switch location={location}>
                    <Route path={`${match.path}/login`} component={LoginFormContainer}/>
                    <Route path={`${match.path}/register`} component={RegisterFormContainer}/>
                    <Redirect to={`${match.path}/login`}/>
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default compose(
    withAnimateHeight("transition-div", 330),
    withRouter
)(TabContent)
