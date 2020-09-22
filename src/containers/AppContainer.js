import React, {useEffect, useState} from "react";
import { withRouter} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import {changeColorScheme, compose, detectColorScheme} from "../utils";
import App from "../components/App";
import {connect} from "react-redux";


const AppContainer = ({ location, history, profile }) =>{
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

    useEffect(()=>{
        if (profile.isLoaded){
            if(!profile.email){
                if (!location.pathname.includes("/user/")){
                    history.push("/user/login")
                }

            }else {
                history.push("/todoApp")
            }
        }
    }, [profile])

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
                <App theme={theme} changeTheme={changeTheme} location={location} userProfile={profile}/>
            </CSSTransition>
        </SwitchTransition>
    );
};
const mapStateToProps = ({firebase:{profile}}) => {
    return {profile};
}
export default compose(
    connect(mapStateToProps),
    withRouter
)(AppContainer);

