import React, {useEffect, useState} from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import TodoApp from "../../routes/TodoApp";
import Form from "../../routes/Form";

import "./App.css"
import {changeColorScheme, detectColorScheme} from "../../utils";
import ThemeToggle from "../ThemeToggle";

const App = ({ location }) =>{
    const [theme, setTheme] = useState("light");

    useEffect(()=>{
        window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
            if (e.matches) {
                setTheme(detectColorScheme());
            }
            setTheme(detectColorScheme());
        });
        setTheme(detectColorScheme());

    },[setTheme]);
    const changeTheme = (checked)=> {
        const setTo = checked ? "dark" : "light"
        changeColorScheme(setTo);
        setTheme(setTo)
    }
    const currentKey = location.pathname.split("/")[1] || "/";
    return(

        <SwitchTransition>
            <CSSTransition
                key={currentKey}
                timeout={300}
                classNames="app">
                <div className="todo-app container">
                    <ThemeToggle theme={theme} changeTheme={changeTheme}/>
                    <Switch location={location}>

                        <Route path="/todoApp">
                            <TodoApp/>
                        </Route>
                        <Route path="/user/" component={Form}/>
                        <Redirect to="/user/"/>
                    </Switch>
                </div>
            </CSSTransition>
        </SwitchTransition>

    );
};

export default withRouter(App);

