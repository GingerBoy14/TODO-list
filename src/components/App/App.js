import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import "./App.css"
import TodoApp from "../TodoApp";
import Form from "../Form";
const App = () =>{
        return(
            <div className="todo-app container">
                <Router>
                    <Switch>
                        <Route path="/todoApp" component={TodoApp}/>
                        <Route path="/login" component={Form}/>
                        <Redirect to="/login"/>
                    </Switch>
                </Router>
            </div>
        );
    };

export default App;

