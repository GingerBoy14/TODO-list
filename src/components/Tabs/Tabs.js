import React, {useEffect, useState} from "react";
import { withRouter } from "react-router-dom";

import "./Tabs.css";

const Tabs = ({ history, location }) =>{
    const [ activeTab, setActiveTab ] = useState('login')
    useEffect(()=>{
        if(location.pathname === '/userForm/login' || location.pathname === '/userForm/')
            setActiveTab('login');
        else
            setActiveTab('register');
    },[]);
    const handleChangeTab = (tabName) =>{
        setActiveTab(tabName);
        if(location.pathname !== `/userForm/${tabName}`)
            history.push(`${tabName}`);
    };


    return(
        <nav>
            <ul className="nav nav-pills">
                <li className="nav-item">
                <span
                    className={`nav-link 
                         ${activeTab==='login' && 'active'}
                         `}
                    onClick={()=>handleChangeTab('login')}>
                    Login
                 </span>
                </li>
                <li className="nav-item">
                <span
                    className={`nav-link 
                         ${activeTab==='register' && 'active'}
                         `}
                    onClick={()=>handleChangeTab('register')}>
                    Register
                 </span>
            </li>
            </ul>
            <div className="slider"
                 style={
                    activeTab==='register'
                         ? { transform:'translateX(100%)' } : null
                 }>
                <div className="indicator"/>
            </div>
        </nav>
    );
};

export default withRouter(Tabs);