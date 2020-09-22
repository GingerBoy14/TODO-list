import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

import "./UserHeader.scss"
import {useFirebase} from "react-redux-firebase";
import {connect} from "react-redux";

 const UserHeader = ({profile}) =>{
     const [ logout, setLogout ] = useState(false);
     const firebase = useFirebase();
     let userName = profile.username ? profile.username : profile.email;
        return(
                <div className="user-bar">
                    <span className="email"
                          onClick={()=>setLogout(!logout)}>
                       {userName}
                    </span>
                    <CSSTransition
                        in={logout}
                        timeout={275}
                        classNames="button"
                        unmountOnExit>
                        <Link to="/user/login" className="button" onClick={()=>firebase.logout()}>Log out</Link>
                    </CSSTransition>
                </div>
        );

};
const mapStateToProps = ({firebase:{profile}}) => {
    return {profile};
}

export default connect(mapStateToProps)(UserHeader);
