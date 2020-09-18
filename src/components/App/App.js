import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import ThemeToggle from "../ThemeToggle";

import "./App.scss"
import {
    FormContainer,
    TodoAppContainer
} from "../../containers";

//location need to correct work switch animation

const App = ({ theme, changeTheme, location }) =>(
    <div className="todo-app-wrapper">
        <ThemeToggle theme={theme} changeTheme={changeTheme}/>
        <div className="todo-app container">
            <Switch location={location}>
                <Route path="/todoApp" component={TodoAppContainer}/>
                <Route path="/user/" component={FormContainer}/>
                <Redirect to="/user/"/>
            </Switch>
        </div>
    </div>
);


export default App;

