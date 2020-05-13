import React, {Component} from "react";
import "./UserFunctions.css"
import { CSSTransition } from 'react-transition-group';

export default class UserFunctions extends Component{

    state={
        logOut:false
    };

    wantLogOut = () => {
        this.setState({logOut:!this.state.logOut})
    };
    render(){

        return(
                <div className="user-bar">
                    <span className="email" onClick={this.wantLogOut}> maks.27.04.2002@gmail.com</span>
                    <CSSTransition
                        in={this.state.logOut}
                        timeout={300}
                        classNames="button"
                        unmountOnExit>
                        <i className="button far fa-times-circle fa-2x"/>
                    </CSSTransition>
                </div>
        );
    }
}


