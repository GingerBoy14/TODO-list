import React, { useState } from "react";
import "./UserHeader.css"
import { CSSTransition } from 'react-transition-group';
import { Link } from "react-router-dom";

 const UserHeader = () =>{

     const [ logout, setLogout ] = useState(false);
        return(
                <div className="user-bar">
                    <span className="email"
                          onClick={()=> setLogout(!logout)}>
                        maks.27.04.2002@gmail.com
                    </span>
                    <CSSTransition
                        in={logout}
                        timeout={275}
                        classNames="button"
                        unmountOnExit>
                        <Link to="/login" className="button">Log out</Link>
                    </CSSTransition>
                </div>
        );

};

export default UserHeader;
