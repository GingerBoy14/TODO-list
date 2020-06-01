import React from "react";
import "./AppHeader.css"
import UserFunctions from "./UserHeader";

const AppHeader = (props) =>{
        return(
            <div className="app-header">
                    <UserFunctions/>
                    <HeaderFunctions {...props}/>
            </div>
        );
};


const HeaderFunctions = ({toDo, done}) =>{
    return(
        <div className="app-bar">
            <h1>Todo List</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>
    )
};
export default AppHeader;


