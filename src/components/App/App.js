import React from "react";
import {  Route, Switch } from "react-router-dom";

import ThemeToggle from "../ThemeToggle";

import "./App.scss"
import {
    FormContainer,
    TodoAppContainer
} from "../../containers";
import Loading from "../Loading";

//location need to correct work switch animation

const App = ({ theme, changeTheme, userProfile, location }) =>(
    <div className="todo-app-wrapper">
        <ThemeToggle theme={theme} changeTheme={changeTheme}/>
        <div className="todo-app container">
            {!userProfile.isLoaded&&!userProfile.email ? <Loading/>
                : <Switch location={location}>
                    <Route path="/todoApp" component={TodoAppContainer}/>
                    <Route path="/user" component={FormContainer}/>

                </Switch>
            }

        </div>
    </div>
);


export default App;

