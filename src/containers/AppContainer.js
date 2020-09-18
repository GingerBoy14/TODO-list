import React, {useEffect, useState} from "react";
import { withRouter } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import {changeColorScheme, compose, detectColorScheme} from "../utils";
import App from "../components/App";


const AppContainer = ({ location }) =>{
    const [theme, setTheme] = useState("light");
    useEffect(()=>{
        window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
            if (e.matches) {
                setTheme(detectColorScheme());
            }
            setTheme(detectColorScheme());
        });
        setTheme(detectColorScheme());
        return listener => window.matchMedia('(prefers-color-scheme: dark)').removeListener(listener);
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
                <App theme={theme} changeTheme={changeTheme} location={location}/>
            </CSSTransition>
        </SwitchTransition>
    );
};

export default compose(
    withRouter
)(AppContainer);

