import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import TodoApp from "../../routes/TodoApp";
import Form from "../../routes/Form";

import "./App.css"

const App = ({ location }) =>{
    const currentKey = location.pathname.split("/")[1] || "/";
    return(
        <div className="todo-app container">
            <SwitchTransition>
                <CSSTransition
                    key={currentKey}
                    timeout={300}
                    classNames="app">
                        <Switch location={location}>
                            <Route path="/todoApp">
                                <TodoApp/>
                            </Route>
                            <Route path="/user/" component={Form}/>
                            <Redirect to="/user/"/>
                        </Switch>
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
};

export default withRouter(App);

