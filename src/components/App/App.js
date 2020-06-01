import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import "./App.css"
import TodoApp from "../../routes/TodoApp";
import Form from "../../routes/Form";
const App = () =>{
        return(
            <div className="todo-app container">
                <Router>
                    <Switch>
                        <Route path="/todoApp" component={TodoApp()}/>
                        <Route path="/userForm/" component={Form}/>
                        <Redirect to="/userForm/"/>
                    </Switch>
                </Router>
            </div>
        );
    };

export default App;

